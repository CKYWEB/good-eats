import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Confirm ({show, onClose, text}) {
    return (
      <Modal
        show={show}
        centered
        onHide={() => onClose(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Confirm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => onClose(false)}
          >
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => onClose(true)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}