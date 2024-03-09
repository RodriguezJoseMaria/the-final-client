import Navbar from "../components/Navbar.jsx";
import banner from "../../public/images/Carrusel/y3_ss24_chapter3.jpg";
import Menu from "../components/Menu.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* <Menu /> */}
      <Navbar />
    </div>
  );
}

export default HomePage;
