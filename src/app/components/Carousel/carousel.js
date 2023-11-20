import { Carousel } from "react-bootstrap";
import Image from "next/image";


export default function CarouselComponent(props) {
  const { items } = props;

  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={item.imageUrl}
            alt={`Slide ${index + 1}`}
            width={600}
            height={600}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}