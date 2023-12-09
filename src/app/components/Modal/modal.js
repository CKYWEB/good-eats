import Button from "@/app/components/Button/button";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent(props) {
  const { show, onHide, title, content } = props;


  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {content}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}