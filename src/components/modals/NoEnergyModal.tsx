import { PLAY_ENERGY_COST } from "~/lib/constants";
import ConfirmModal from "./ConfirmModal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  [key: string]: any;
};

export default function NoEnergyModal(props: Props) {
  return (
    <ConfirmModal {...props}>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "2em" }}>
          LOW ENERGY!
          <hr />
        </div>
        <p>
          Your energy is too low. You need at least {PLAY_ENERGY_COST} points to
          play.
        </p>
        <p>
          You will recover energy over time. Take a break and come back later!
        </p>
      </div>
    </ConfirmModal>
  );
}
