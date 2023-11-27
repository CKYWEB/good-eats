import Badge from "react-bootstrap/Badge";


export default function BadgeComponent(props) {
  const { text } = props;

  return (
    <Badge
      bg="warning"
    >
      {text}
    </Badge>
  );
}