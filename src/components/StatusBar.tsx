import { MAIN_COLOR, RED } from "~/lib/constants.ts";
import BasicProgressBar from "./BasicProgressBar";
import GameIconsCheckMark from "./icons/GameIconsCheckMark";
import GameIconsCrossMark from "./icons/GameIconsCrossMark";
import GameIconsHourglass from "./icons/GameIconsHourglass";

export default function StatusBar({ session: ses }: { session: Session }) {
  const total = ses.correct.length + ses.failed.length + ses.pending.length;

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
        <span>
          <GameIconsCheckMark style={{ color: MAIN_COLOR }} />
          {ses.correct.length}
        </span>
        <span>
          <GameIconsCrossMark style={{ color: RED }} />
          {ses.failed.length}
        </span>
        <span>
          <GameIconsHourglass style={{ color: "#efb60e" }} />
          {ses.pending.length}
        </span>
      </div>
      <BasicProgressBar progress={ses.correct.length} total={total} />
    </>
  );
}
