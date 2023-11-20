import Card from "react-bootstrap/Card";
import Button from "@/app/components/Button/button";
import BadgeComponent from "@/app/components/Badge/badge";

export default function CardComponent(props) {
  const { showBadge, badgeText, imageUrl, title, text, onClickLeft, buttonTextLeft, onClickRight, buttonTextRight } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
      />
      <Card.Body>
        <Card.Title>
          {title}
          {showBadge && <BadgeComponent
            text={badgeText}
          />}
        </Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className="d-flex mr-2 justify-content-between">
          <Button
            variant="primary"
            onClick={onClickLeft}
          >
            {buttonTextLeft}
          </Button>
          <Button
            variant="primary"
            onClick={onClickRight}
          >
            {buttonTextRight}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}