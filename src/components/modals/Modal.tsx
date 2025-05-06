import { useEffect, useRef } from "react";

import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

export default function Modal({ children, isOpen }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className={styles.modal}>
      {children}
    </dialog>
  );
}
