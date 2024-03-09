import Menu from "./Menu";
import Navbar from "./Navbar";
import "./Container.css";

function Container({ children }) {
  return (
    <section className="layout">
      <Menu />
      <Navbar>{children}</Navbar>
    </section>
  );
}

export default Container;
