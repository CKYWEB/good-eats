import Image from "next/image";
import "./components/Errors/not-found.scss";
 
export default function NotFound() {
  return (
    <div className="error-container">
      <Image
        className="error-image"
        src="/images/empty-meal.png"
        alt="Error Image"
        width={500}
        height={500}
      />
      <div className="error-message">
        <h1>
          404 - Not Found
        </h1>
        <p>
          Sorry, the page you are looking for cannot be found.
        </p>
      </div>
    </div>
  );
}