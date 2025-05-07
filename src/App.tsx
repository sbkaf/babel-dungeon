import { useState } from "react";

import { initGame } from "~/lib/game";
import {
  getShowIntro,
  getSoundEnabled,
  setSoundEnabled,
  getTTSEnabled,
  setTTSEnabled,
  getMode,
  setMode,
} from "~/lib/storage";
import { backgroundMusic, clickSfx } from "~/lib/sounds";

import Home from "~/pages/Home";
import GameSession from "~/pages/GameSession";
import LevelUpModal from "~/components/modals/LevelUpModal";
import IntroModal from "~/components/modals/IntroModal";
import CreditsModal from "~/components/modals/CreditsModal";
import SettingsModal from "~/components/modals/SettingsModal";

// @ts-ignore
import "@fontsource/press-start-2p";
import "./App.css";

export default function App() {
  const [session, setSession] = useState(null as Session | null);
  const [player, setPlayer] = useState(null as Player | null);
  const [modal, setModal] = useState(() => {
    if (getShowIntro()) return { type: "intro" } as ModalPayload;
    return null as ModalPayload | null;
  });
  const [_ignore] = useState(() => initGame(setSession, setPlayer, setModal));
  const [sound, setSound] = useState(getSoundEnabled());
  const [ttsEnabled, setTTS] = useState(getTTSEnabled());
  const [mode, setModeState] = useState(getMode());

  const playing = session && session.pending.length + session.failed.length;
  let modalComp = null;
  const onClose = () => {
    setModal(null);
  };
  const onShowSettings = () => {
    if (sound) clickSfx.play();
    setModal({ type: "settings" });
  };

  if (modal === null) {
  } else if (modal.type === "levelUp") {
    modalComp = (
      <LevelUpModal
        level={modal.newLevel}
        energy={modal.newEnergy}
        isOpen={true}
        onClose={onClose}
      />
    );
  } else if (modal.type === "intro") {
    modalComp = <IntroModal isOpen={true} onClose={onClose} />;
  } else if (modal.type === "credits") {
    modalComp = <CreditsModal isOpen={true} onClose={onClose} />;
  } else if (modal.type === "settings") {
    const onShowCredits = () => {
      setModal({ type: "credits" });
    };
    const toggleSound = () => {
      setSound((enabled) => {
        enabled = !enabled;
        if (enabled) {
          backgroundMusic.play();
        } else {
          backgroundMusic.stop();
        }
        setSoundEnabled(enabled);
        return enabled;
      });
    };
    const toggleTTS = () => {
      setTTS((enabled) => {
        enabled = !enabled;
        setTTSEnabled(enabled);
        return enabled;
      });
    };
    const toggleMode = () => {
      setModeState((mode) => {
        mode = !mode;
        setMode(mode);
        return mode;
      });
    };
    modalComp = (
      <SettingsModal
        isOpen={true}
        onClose={onClose}
        soundEnabled={sound}
        toggleSound={toggleSound}
        ttsEnabled={ttsEnabled}
        toggleTTS={toggleTTS}
        defaultMode={mode}
        toggleMode={toggleMode}
        onShowCredits={onShowCredits}
      />
    );
  }
  return (
    <>
      {modalComp}
      {playing ? (
        <GameSession session={session} />
      ) : (
        player && <Home player={player} onShowSettings={onShowSettings} />
      )}
    </>
  );
}
