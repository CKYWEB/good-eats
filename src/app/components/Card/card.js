import { Card, Modal } from "react-bootstrap";
import Button from "@/app/components/Button/button";
import BadgeComponent from "@/app/components/Badge/badge";
import { FaHeart, FaCheckCircle } from "react-icons/fa";
import styles from "./card.module.scss";
import { useState } from "react";
import { saveRecipe } from "@/api/recipe";
import toast from "react-hot-toast";


export default function CardComponent(props) {
  const { card, badgeText, buttonTextLeft, buttonTextRight, onBtnClick } = props;

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const addRecipe = async () => {
    try {
      await saveRecipe(card);
      handleShow();
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
      {card.shouldShowIcon && <Button
        className={styles["save-button"]}
        onClick={() => addRecipe()}
      >
        <FaHeart />
      </Button>}
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

      <Modal
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center flex-column py-5">
          <FaCheckCircle className={`my-5 ${styles["check-icon"]}`} />
          <h2>
            Saved!
          </h2>
        </Modal.Body>
      </Modal>

    </Card>
  );
}