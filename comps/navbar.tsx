import Image from "next/image";
import logo from './logo.webp';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Image
            src={logo}
            draggable="false"
            height="75px"
            width="75px"
            alt="Hussein Mohammed logo"
          />
        </div>
        <ul className="links">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#demos">demos</a>
          </li>
          <li>
            <a href="#studio">studio</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#biography">biography</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;