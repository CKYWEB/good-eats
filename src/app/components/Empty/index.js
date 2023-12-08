import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Empty() {
    return (
      <Container
        fluid
        className="d-flex justify-content-center"
      >
        <div>
          <Image
            alt="empty"
            src="/images/empty-meal.png"
            width={250}
          />
          <div className="text-center">
            Sorry, no contents here yet.
          </div>
        </div>
      </Container>
    );
}
