import { LANG1_FLAG, LANG2_FLAG } from "~/lib/constants.ts";

import MenuPreference from "~/components/MenuPreference";
import MenuButton from "~/components/MenuButton";
import ConfirmModal from "./ConfirmModal";

interface Props {
  soundEnabled: boolean;
  toggleSound: () => void;
  ttsEnabled: boolean;
  toggleTTS: () => void;
  defaultMode: boolean;
  toggleMode: () => void;
  onShowCredits: () => void;
  onClose: () => void;
  isOpen: boolean;
  [key: string]: any;
}

function MenuItem({ children }: { children: React.ReactNode }) {
  return <div style={{ marginTop: "1em" }}>{children}</div>;
}

export default function SettingsModal({
  soundEnabled,
  toggleSound,
  ttsEnabled,
  toggleTTS,
  defaultMode,
  toggleMode,
  onShowCredits,
  ...props
}: Props) {
  const soundState = soundEnabled ? "[ ON]" : "[OFF]";
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
            name="Sounds"
            state={soundState}
            onClick={toggleSound}
          />
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
