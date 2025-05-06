import ConfirmModal from "./ConfirmModal";

type Props = {
  level: number;
  energy: number;
  onClose: () => void;
  isOpen: boolean;
  [key: string]: any;
};

export default function LevelUpModal({ level, energy, ...props }: Props) {
  return (
    <ConfirmModal {...props}>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "2em" }}>
          You Leveled Up!
          <hr />
        </div>
        <div style={{ fontSize: "0.8em", paddingBottom: "0.4em" }}>
          Now at level
        </div>
        <div style={{ fontSize: "1.5em" }}>🎉{level}🎉</div>
        {energy > 0 && <div style={{ marginTop: "1em" }}>+{energy} energy</div>}
      </div>
    </ConfirmModal>
  );
}
