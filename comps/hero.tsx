import Image from "next/image";

import styles from "../styles/hero.module.scss";

const handleMobileNav = () => {
  const nav = document.getElementById("mobile-nav") as HTMLDivElement;

  if (nav.style.width === "250px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "250px";
  }
};

const Hero = () => {
  return (
    <>
      <div className={styles["mobile-nav"]} id="mobile-nav">
        <ul>
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
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <button onClick={handleMobileNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                style={{ fill: "white" }}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div id="home" className={styles.heroContainer}>
        <header className={styles.navbar}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Image
                src="/favicon.png"
                draggable="false"
                height="75px"
                width="75px"
                alt="Hussein Mohammed logo"
              />
            </div>
            <ul className={styles.links}>
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
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#testimonials">testimonials</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
            <div className={styles.mobileNavIcon} onClick={handleMobileNav}>
              <div className="container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  style={{ fill: "white" }}
                >
                  <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                </svg>
              </div>
            </div>
          </nav>
        </header>
        <div className={styles.flexSection}>
          <div className={styles.right}>
            <h1>Hussein Mohammed</h1>
            <p>Voice actor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
