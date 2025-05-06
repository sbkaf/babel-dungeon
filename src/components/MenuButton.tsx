interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export default function MenuButton({ children, ...props }: Props) {
  const btnStyle = {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    padding: "0.5em",
  };
  props.style = { ...btnStyle, ...(props.style || {}) };

  return <button {...props}>{children}</button>;
}
