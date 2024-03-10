import banner from "../../public/images/Carrusel/y3_ss24_chapter3.jpg";
import Container from "../components/Container";
import "./HomePage.css";

function HomePage() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <Container />
    </div>
  );
}

export default HomePage;
