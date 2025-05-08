interface Props {
  text: string;
  [key: string]: any;
}

export default function TextIcon({ text, ...props }: Props) {
  props.style = { fontWeight: "bold", ...(props.style || {}) };
  return <span {...props}>{text}</span>;
}
