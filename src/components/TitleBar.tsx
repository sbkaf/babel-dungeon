import TextIcon from "~/components/icons/TextIcon";

export default function TitleBar({
  onShowSettings,
}: {
  onShowSettings: () => void;
}) {
  const containerStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#313131",
  };
  const settingsStyle = {
    padding: "0.5em",
    fontSize: "1.4em",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={{ paddingLeft: "1em" }}>Babel Dungeon</div>
      <TextIcon text="Ξ" style={settingsStyle} onClick={onShowSettings} />
    </div>
  );
}
