import { Card } from "react-bootstrap";
import Button from "@/app/components/Button/button";
import BadgeComponent from "@/app/components/Badge/badge";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./card.module.scss";
import { saveRecipe } from "@/api/recipe";
import toast from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


export default function CardComponent(props) {
  const { card, badgeText, buttonTextLeft, buttonTextRight, onBtnClick } = props;

  const addRecipe = async () => {
    try {
      await saveRecipe(card);
      toast.success("Recipe saved!");
    } catch (err) {
      toast.error(err.message);
    }
  };


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={card.imageUrl}
      />
      {card.shouldShowIcon && (
      <Button
        className={styles["save-button"]}
        onClick={() => addRecipe()}
      >
        <FontAwesomeIcon icon={faHeart} />
      </Button>
      )}
      <Card.Body>
        <Card.Title>
          {card.title}
          {card.shouldShowBadge && (
            <BadgeComponent
              text={badgeText}
            />
          )}
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