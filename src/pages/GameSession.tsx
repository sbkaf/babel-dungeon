import { useState, useEffect } from "react";

import { MAIN_COLOR, RED } from "~/lib/constants";
import { getMode, getTTSEnabled, getSFXEnabled } from "~/lib/storage";
import { successSfx, errorSfx } from "~/lib/sounds";
import { getCard, sendMonsterUpdate } from "~/lib/game";
import { tts } from "~/lib/tts";

import MonsterCard from "~/components/MonsterCard";
import Meanings from "~/components/Meanings";
import StatusBar from "~/components/StatusBar";
import GameIconsCheckMark from "~/components/icons/GameIconsCheckMark";
import GameIconsCrossMark from "~/components/icons/GameIconsCrossMark";

interface Props {
  showXP: boolean;
  session: Session;
}

export default function GameSession({ showXP, session }: Props) {
  const [show, setShow] = useState(false);

  const defaultMode = getMode();
  const ttsEnabled = getTTSEnabled();
  const sfxEnabled = getSFXEnabled();
  const monster = session.pending[0] || session.failed[0];
  const { sentence, meanings } = getCard(monster.id);

  const onFailed = () => {
    if (sfxEnabled) errorSfx.play();
    setShow(false);
    sendMonsterUpdate(monster, false);
  };
  const onCorrect = () => {
    if (sfxEnabled) successSfx.play();
    setShow(false);
    sendMonsterUpdate(monster, true);
  };
  const onShow = () => {
    if (ttsEnabled && !defaultMode) tts(sentence);
    setShow(true);
  };

  const baseBtn = {
    width: "50%",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "1.5em",
  };

  const meaningsComp = <Meanings key={monster.id} meanings={meanings} />;

  useEffect(() => {
    if (ttsEnabled && defaultMode) tts(sentence);
  }, [monster]);

  const sentenceSize = sentence.length > 80 ? "0.8em" : undefined;
  const statusBarStyle = {
    position: "sticky",
    top: 0,
    backgroundColor: "black",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <StatusBar session={session} showXP={showXP} style={statusBarStyle} />
      <div style={{ padding: "0.5em 0.3em 0.3em 0.3em", marginBottom: "6em" }}>
        <MonsterCard
          monster={monster}
          sentence={sentence}
          meanings={defaultMode ? undefined : meaningsComp}
        />
        {show && (
          <>
            <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
              <span style={{ fontSize: "1.5em" }}>↓</span>
            </div>
            {defaultMode ? (
              meaningsComp
            ) : (
              <div style={{ fontSize: sentenceSize }}>{sentence}</div>
            )}
          </>
        )}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          backgroundColor: "black",
        }}
      >
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
