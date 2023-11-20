import { ButtonGroup } from "react-bootstrap";
import Button from "@/app/components/Button/button";


export default function ButtonGroupComponent(props) {
  const { buttons } = props;

  return (
    <ButtonGroup>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          onClick={button.onClick}
          style={{ marginRight: "10px", borderRadius: "6px" }}
        >
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}