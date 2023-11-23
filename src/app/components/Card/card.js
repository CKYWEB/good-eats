import Card from "react-bootstrap/Card";
import Button from "@/app/components/Button/button";
import BadgeComponent from "@/app/components/Badge/badge";

export default function CardComponent(props) {
  const { card, badgeText, buttonTextLeft, buttonTextRight, onBtnClick } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={card.imageUrl}
      />
      <Card.Body>
        <Card.Title>
          {card.title}
          {card.shouldShowBadge && <BadgeComponent
            text={badgeText}
          />}
        </Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <div className="d-flex mr-2 justify-content-between">
          <Button onClick={() => onBtnClick(true, card)}>
            {buttonTextLeft}
          </Button>
          <Button onClick={() => onBtnClick(false, card)}>
            {buttonTextRight}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}