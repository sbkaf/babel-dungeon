import { MAIN_COLOR, RED } from "~/lib/constants.ts";
import BasicProgressBar from "./BasicProgressBar";
import GameIconsCheckMark from "./icons/GameIconsCheckMark";
import GameIconsCrossMark from "./icons/GameIconsCrossMark";
import GameIconsHourglass from "./icons/GameIconsHourglass";

export default function StatusBar({ session }: { session: Session }) {
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
        <span>+{session.xp}xp</span>
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
