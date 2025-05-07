import { MAIN_COLOR, RED } from "~/lib/constants";
import BasicProgressBar from "./BasicProgressBar";
import GameIconsCheckMark from "./icons/GameIconsCheckMark";
import GameIconsCrossMark from "./icons/GameIconsCrossMark";
import GameIconsHourglass from "./icons/GameIconsHourglass";

interface Props {
  showXP: boolean;
  session: Session;
}

export default function StatusBar({ showXP, session }: Props) {
  const total =
    session.correct.length + session.failed.length + session.pending.length;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px 15px 5px 15px",
        }}
      >
        {showXP && <span>+{session.xp}xp</span>}
        <span>
          <GameIconsCheckMark style={{ color: MAIN_COLOR }} />
          {session.correct.length}
        </span>
        <span>
          <GameIconsCrossMark style={{ color: RED }} />
          {session.failed.length}
        </span>
        <span>
          <GameIconsHourglass style={{ color: "#efb60e" }} />
          {session.pending.length}
        </span>
      </div>
      <BasicProgressBar progress={session.correct.length} total={total} />
    </>
  );
}
