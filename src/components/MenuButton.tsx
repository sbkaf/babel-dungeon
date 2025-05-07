import { clickSfx } from "~/lib/sounds";
import { getSoundEnabled } from "~/lib/storage";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  [key: string]: any;
}

export default function MenuButton({ onClick, children, ...props }: Props) {
  const btnStyle = {
    width: "100%",
    fontSize: "1em",
    color: "black",
    backgroundColor: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    padding: "0.5em",
  };
  props.style = { ...btnStyle, ...(props.style || {}) };
  const clickWithSound = () => {
    if (getSoundEnabled()) clickSfx.play();
    onClick();
  };

  return (
    <button onClick={clickWithSound} {...props}>
      {children}
    </button>
  );
}
