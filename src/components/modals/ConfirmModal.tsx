import { MAIN_COLOR } from "~/lib/constants.ts";

import Modal from "./Modal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

export default function ConfirmModal({ onClose, isOpen, children }: Props) {
  return (
    <Modal isOpen={isOpen}>
      <div>{children}</div>
      <button
        style={{
          width: "100%",
          fontSize: "1em",
          color: "black",
          background: MAIN_COLOR,
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          padding: "0.5em",
          marginTop: "2em",
        }}
        onClick={onClose}
      >
        Continue
      </button>
    </Modal>
  );
}
