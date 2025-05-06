import { LANG1_FLAG, LANG2_FLAG } from "~/lib/constants.ts";

import ConfirmModal from "./ConfirmModal";

type Props = {
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
};

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
  const btnStyle = {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    padding: "0.5em",
  };
  return (
    <ConfirmModal {...props}>
      <div>
        <div style={{ marginBottom: "2em" }}>
          SETTINGS
          <hr />
        </div>
        <MenuItem>
          <button style={btnStyle} onClick={toggleSound}>
            Sounds {soundEnabled ? "[ ON]" : "[OFF]"}
          </button>
        </MenuItem>
        <MenuItem>
          <button style={btnStyle} onClick={toggleTTS}>
            TTS {ttsEnabled ? "[ ON]" : "[OFF]"}
          </button>
        </MenuItem>
        <MenuItem>
          <button style={btnStyle} onClick={toggleMode}>
            Mode{" "}
            {defaultMode
              ? `[${LANG1_FLAG}->${LANG2_FLAG}]`
              : `[${LANG2_FLAG}->${LANG1_FLAG}]`}
          </button>
        </MenuItem>
        <MenuItem>
          <button style={btnStyle} onClick={onShowCredits}>
            Credits
          </button>
        </MenuItem>
      </div>
    </ConfirmModal>
  );
}
