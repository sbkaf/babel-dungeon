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
          <p>Sentences collection: tatoeba.org</p>
          <p>Icons: game-icons.net and Material Symbols by Google</p>
          <p>Font: "Press Start 2P" by Google</p>
          <p>
            Random monster generator: github.com/fabianobizarro/react-monsterid
          </p>
          <p>Music: opengameart.org/content/cc0-scraps</p>
        </div>
      </div>
    </ConfirmModal>
  );
}
