interface Props {
  title: string;
  number: number | string;
  numberSize?: string;
  numberColor?: string;
  unit?: string;
  [key: string]: any;
}

export default function StatSection({
  title,
  number,
  numberSize,
  numberColor,
  unit,
  ...props
}: Props) {
  const smallLabel = { paddingLeft: "0.2em", fontSize: "0.9em" };
  return (
    <div {...props}>
      <div style={{ paddingBottom: "0.2em" }}>{title}</div>
      <div>
        <span style={{ color: numberColor, fontSize: numberSize }}>
          {number}
        </span>
        {unit && <span style={smallLabel}>{unit}</span>}
      </div>
    </div>
  );
}
