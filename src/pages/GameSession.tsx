import { MAIN_COLOR, RED } from "~/lib/constants.ts";
import { useState } from "react";
import { getMode } from "~/lib/storage";
import { getCard, sendMonsterUpdate } from "~/lib/game";
import MonsterCard from "~/components/MonsterCard";
import Meanings from "~/components/Meanings";
import StatusBar from "~/components/StatusBar";
import GameIconsCheckMark from "~/components/icons/GameIconsCheckMark";
import GameIconsCrossMark from "~/components/icons/GameIconsCrossMark";

export default function GameSession({ session }: { session: Session }) {
  const [show, setShow] = useState(false);

  const monster = session.pending[0] || session.failed[0];
  const { sentence, meanings } = getCard(monster.id);
  const onFailed = () => {
    setShow(false);
    sendMonsterUpdate(monster, false);
  };
  const onCorrect = () => {
    setShow(false);
    sendMonsterUpdate(monster, true);
  };
  const onShow = () => setShow(true);

  const baseBtn = {
    width: "50%",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "1.5em",
  };

  const defaultMode = getMode();
  const meaningsComp = <Meanings key={monster.id} meanings={meanings} />;

  return (
    <div style={{ textAlign: "center" }}>
      <StatusBar session={session} />
      <div style={{ padding: "0.5em 0.3em 0.3em 0.3em" }}>
        <MonsterCard
          monster={monster}
          sentence={sentence}
          meanings={defaultMode ? undefined : meaningsComp}
        />
        {show && (
          <>
            <div style={{ fontSize: "1.5em", paddingBottom: "0.3em" }}>↓</div>
            {defaultMode ? meaningsComp : sentence}
          </>
        )}
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        {show ? (
          <>
            <p style={{ fontSize: "0.8em" }}>Did you know it?</p>
            <button style={{ ...baseBtn, background: RED }} onClick={onFailed}>
              <GameIconsCrossMark style={{ verticalAlign: "middle" }} />
            </button>
            <button
              style={{ ...baseBtn, background: MAIN_COLOR }}
              onClick={onCorrect}
            >
              <GameIconsCheckMark style={{ verticalAlign: "middle" }} />
            </button>
          </>
        ) : (
          <button
            onClick={onShow}
            style={{
              ...baseBtn,
              background: "#32526d",
              width: "100%",
            }}
          >
            Reveal
          </button>
        )}
      </div>
    </div>
  );
}
