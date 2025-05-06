import { useState } from "react";
import MaterialSymbolsDirectorySync from "~/components/icons/MaterialSymbolsDirectorySync";

export default function Meanings({ meanings }: { meanings: string[] }) {
  const [index, setIndex] = useState(0);
  const count = meanings.length;
  const onSwitch = () => setIndex((index) => (index + 1) % count);

  return (
    <div>
      {meanings[index]}{" "}
      {count > 1 ? (
        <button
          onClick={onSwitch}
          style={{
            background: "#dddddd",
            color: "black",
            borderRadius: "5px",
            border: "none",
            padding: "0.4em",
            fontWeight: "bold",
            marginTop: "0.3em",
          }}
        >
          [{index + 1}/{count}]
          <MaterialSymbolsDirectorySync />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
