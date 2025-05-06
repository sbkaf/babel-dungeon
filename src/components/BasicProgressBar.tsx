import { MAIN_COLOR } from "~/lib/constants.ts";

interface Props {
  progress: number;
  total: number;
  color?: string;
  background?: string;
  height?: string;
}

export default function BasicProgressBar({
  progress,
  total,
  color,
  background,
  height,
}: Props) {
  const width = `${Math.round((progress / total) * 100)}%`;
  const style = {
    backgroundColor: color || MAIN_COLOR,
    height: height || "3px",
    width,
    transition: "0.2s",
    transitionProperty: "width",
    transitionTimingFunction: "ease-out",
  };
  return (
    <div style={{ backgroundColor: background || "#464646" }}>
      <div style={style}></div>
    </div>
  );
}
