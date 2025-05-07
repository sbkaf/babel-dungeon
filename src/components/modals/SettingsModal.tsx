import { useState } from "react";

import { LANG1_FLAG, LANG2_FLAG } from "~/lib/constants.ts";
import {
  getMusicEnabled,
  setMusicEnabled,
  getSFXEnabled,
  setSFXEnabled,
  getTTSEnabled,
  setTTSEnabled,
  getMode,
  setMode,
} from "~/lib/storage";
import { backgroundMusic } from "~/lib/sounds";

import MenuPreference from "~/components/MenuPreference";
import MenuButton from "~/components/MenuButton";
import ConfirmModal from "./ConfirmModal";

interface Props {
  onShowCredits: () => void;
  onClose: () => void;
  isOpen: boolean;
  [key: string]: any;
}

function MenuItem({ children }: { children: React.ReactNode }) {
  return <div style={{ marginTop: "1em" }}>{children}</div>;
}

export default function SettingsModal({ onShowCredits, ...props }: Props) {
  const [musicEnabled, setMusic] = useState(getMusicEnabled());
  const [sfxEnabled, setSFX] = useState(getSFXEnabled());
  const [ttsEnabled, setTTS] = useState(getTTSEnabled());
  const [defaultMode, setModeState] = useState(getMode());

  const toggleMusic = () => {
    setMusic((enabled) => {
      enabled = !enabled;
      if (enabled) {
        backgroundMusic.play();
      } else {
        backgroundMusic.stop();
      }
      setMusicEnabled(enabled);
      return enabled;
    });
  };
  const toggleSFX = () => {
    setSFX((enabled) => {
      enabled = !enabled;
      setSFXEnabled(enabled);
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

  const musicState = musicEnabled ? "[ ON]" : "[OFF]";
  const sfxState = sfxEnabled ? "[ ON]" : "[OFF]";
  const ttsState = ttsEnabled ? "[ ON]" : "[OFF]";
  const modeState = defaultMode
    ? `[${LANG1_FLAG}>${LANG2_FLAG}]`
    : `[${LANG2_FLAG}>${LANG1_FLAG}]`;

  return (
    <ConfirmModal {...props}>
      <div>
        <div style={{ marginBottom: "2em" }}>
          SETTINGS
          <hr />
        </div>
        <MenuItem>
          <MenuPreference
            name="Music"
            state={musicState}
            onClick={toggleMusic}
          />
        </MenuItem>
        <MenuItem>
          <MenuPreference name="SFX" state={sfxState} onClick={toggleSFX} />
        </MenuItem>
        <MenuItem>
          <MenuPreference name="TTS" state={ttsState} onClick={toggleTTS} />
        </MenuItem>
        <MenuItem>
          <MenuPreference name="Mode" state={modeState} onClick={toggleMode} />
        </MenuItem>
        <MenuItem>
          <MenuButton onClick={onShowCredits}>Credits</MenuButton>
        </MenuItem>
      </div>
    </ConfirmModal>
  );
}
