import ConfirmModal from "./ConfirmModal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  [key: string]: any;
};

export default function CreditsModal(props: Props) {
  return (
    <ConfirmModal {...props}>
      <div
        style={{ textAlign: "center", overflowWrap: "break-word" }}
        tabIndex={1}
      >
        <div style={{ marginBottom: "2em" }}>
          CREDITS
          <hr />
        </div>
        <div style={{ fontSize: "0.9em" }}>
          <p>Sentences collection: tatoeba.org</p>
          <p>Cross mark and Hourglass icons by Lorc (lorcblog.blogspot.com)</p>
          <p>
            Party popper and Check mark icons by Delapouite (delapouite.com)
          </p>
          <p>Full credits at: github.com/ArcaneCircle/babel-dungeon</p>
        </div>
      </div>
    </ConfirmModal>
  );
}
