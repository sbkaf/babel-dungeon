import MenuButton from "./MenuButton";

interface Props {
  onClick: () => void;
  name: string;
  state: string;
  [key: string]: any;
}

export default function MenuPreference({ name, state, ...props }: Props) {
  const divStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
  };
  return (
    <MenuButton {...props}>
      <div style={divStyle}>
        <span style={{ paddingRight: "1em" }}>{name}</span> <span>{state}</span>
      </div>
    </MenuButton>
  );
}
