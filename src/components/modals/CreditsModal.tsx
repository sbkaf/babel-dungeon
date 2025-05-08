import ConfirmModal from "./ConfirmModal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  [key: string]: any;
};

export default function CreditsModal(props: Props) {
  return (
    <ConfirmModal {...props}>
      <div style={{ textAlign: "center" }} tabIndex={1}>
        <div style={{ marginBottom: "2em" }}>
          CREDITS
          <hr />
        </div>
        <div style={{ fontSize: "0.9em" }}>
          <p>Developer: Asiel Diaz Benitez</p>
          <p>Sentences collection: tatoeba.org</p>
          <p>Music: "Cave" by celestialghost8</p>
          <p>Sound effects by celestialghost8, Fupi and Dizzy Crow</p>
          <p>More details at: github.com/ArcaneCircle/babel-dungeon</p>
        </div>
      </div>
    </ConfirmModal>
  );
}
