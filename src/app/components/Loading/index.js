import {Container, Spinner} from "react-bootstrap";

export default function Loading() {
    return (
      <Container>
        <Spinner
          animation="border"
          role="status"
          variant="danger"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </Spinner>
      </Container>
    );
}