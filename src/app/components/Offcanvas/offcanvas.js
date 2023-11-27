import { Offcanvas } from "react-bootstrap";
import Image from "next/image";


export default function OffcanvasComponent(props) {
  const { show, onHide, title, content, imageUrl } = props;

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {title}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {content}
        {imageUrl && <Image
          src={imageUrl}
          alt="Offcanvas Image"
          style={{ maxWidth: "100%" }}
          width={350}
          height={250}
        />}
      </Offcanvas.Body>
    </Offcanvas>
  );
}