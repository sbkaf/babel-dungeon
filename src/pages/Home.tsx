import {
  MAIN_COLOR,
  RED,
  MAX_LEVEL,
  PLAY_ENERGY_COST,
} from "~/lib/constants.ts";
import { startNewGame } from "~/lib/game";
import { getLastPlayed } from "~/lib/storage";
import PixelatedProgressBar from "~/components/PixelatedProgressBar";
import StatSection from "~/components/StatSection";
import TitleBar from "~/components/TitleBar";
import MenuButton from "~/components/MenuButton";

const card = {
  display: "flex",
  flexDirection: "column" as "column",
  border: "1px solid #464646",
  borderRadius: "5px",
  padding: "10px",
};

export default function Home({
  player,
  onShowSettings,
}: {
  player: Player;
  onShowSettings: () => void;
}) {
  const canPlay = player.energy >= PLAY_ENERGY_COST;

  const today = new Date().setHours(0, 0, 0, 0);
  const lastPlayed = getLastPlayed();
  const streakColor = lastPlayed === today ? MAIN_COLOR : undefined;
  const toReviewColor = player.toReview ? undefined : MAIN_COLOR;
  const energyColor = player.energy < 10 ? RED : undefined;

  const xp = player.lvl === MAX_LEVEL ? "MAX" : player.totalXp - player.xp;
  const xpColor = player.lvl === MAX_LEVEL ? MAIN_COLOR : undefined;
  const xpUnit = player.lvl === MAX_LEVEL ? undefined : "xp";

  return (
    <>
      <TitleBar onShowSettings={onShowSettings} />
      <div style={{ padding: "0.5em" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "1em",
          }}
        >
          <div style={{ ...card, width: "50%", marginRight: "0.2em" }}>
            <StatSection
              title={"LEVEL"}
              number={player.lvl}
              style={{ paddingBottom: "1em" }}
            />
            <StatSection
              title="NEXT"
              number={xp}
              numberColor={xpColor}
              unit={xpUnit}
              style={{ paddingBottom: "1em" }}
            />
            <StatSection
              title="ENERGY"
              number={player.energy}
              numberColor={energyColor}
              unit={`/${player.maxEnergy}`}
            />
          </div>
          <div style={{ ...card, width: "50%" }}>
            <StatSection
              title="STREAK"
              number={player.streak}
              numberColor={streakColor}
              unit={"day" + (player.streak === 1 ? "" : "s")}
              style={{ paddingBottom: "1em" }}
            />
            <StatSection
              title="PLAYED"
              number={player.studiedToday}
              unit="today"
              style={{ paddingBottom: "1em" }}
            />
            <StatSection
              title="REVIEW"
              number={player.toReview}
              numberColor={toReviewColor}
            />
          </div>
        </div>
        <div style={card}>
          <div style={{ paddingTop: "0.5em", paddingBottom: "1em" }}>
            <div style={{ paddingBottom: "0.3em" }}>Discovered:</div>
            <div style={{ paddingBottom: "0.3em" }}>
              {player.seen % 100}/100
              <span style={{ display: "inline", float: "right" }}>
                RANK:{Math.floor(player.seen / 100)}
              </span>
            </div>
            <PixelatedProgressBar
              progress={player.seen % 100}
              total={100}
              color={"#92c81a"}
              colorDiag1={"#7bc415"}
              colorDiag2={"#74b215"}
              colorDiag3={"#2c341c"}
            />
          </div>
          <div style={{ paddingBottom: "0.5em" }}>
            <div style={{ paddingBottom: "0.2em" }}>Mastered:</div>
            <div style={{ paddingBottom: "0.3em" }}>
              {player.mastered % 100}/100
              <span style={{ display: "inline", float: "right" }}>
                RANK:{Math.floor(player.mastered / 100)}
              </span>
            </div>
            <PixelatedProgressBar
              progress={player.mastered % 100}
              total={100}
              color={"#efb60e"}
              colorDiag1={"#e3ad0e"}
              colorDiag2={"#d09f0d"}
              colorDiag3={"#423204"}
            />
          </div>
        </div>
        <p>
          <MenuButton
            style={{
              fontSize: "1.5em",
              color: canPlay ? "black" : "#222222",
              background: canPlay ? MAIN_COLOR : "#3e3e3e",
              cursor: canPlay ? "pointer" : "not-allowed",
              padding: "0.6em",
            }}
            onClick={startNewGame}
            disabled={!canPlay}
          >
            Play
          </MenuButton>
        </p>
      </div>
    </>
  );
}
