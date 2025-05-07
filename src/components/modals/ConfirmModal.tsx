import { MAIN_COLOR } from "~/lib/constants.ts";

import MenuButton from "~/components/MenuButton";
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
      <MenuButton
        style={{
          color: "black",
          background: MAIN_COLOR,
          marginTop: "2em",
        }}
        onClick={onClose}
      >
        Continue
      </MenuButton>
    </Modal>
  );
}
