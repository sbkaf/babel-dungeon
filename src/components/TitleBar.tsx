import MaterialSymbolsLightSettings from "~/components/icons/MaterialSymbolsLightSettings";

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
  const settingsStyle = { padding: "0.2em 0.5em", width: "2em", height: "2em" };

  return (
    <div style={containerStyle}>
      <div style={{ paddingLeft: "0.5em" }}>Babel Dungeon</div>
      <MaterialSymbolsLightSettings
        style={settingsStyle}
        onClick={onShowSettings}
      />
    </div>
  );
}
