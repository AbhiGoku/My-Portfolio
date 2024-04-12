import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

import styles from "./NavBar.module.css";

import { getImageUrl } from "../../utils";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          <Typewriter
            words={["Welcome", "to my", "Portfolio"]}
            loop={100}
            cursor={true}
            cursorStyle="_"
            typeSpeed={200}
            deleteSpeed={150}
            delaySpeed={1000}
          />
        </a>
        <div className={styles.menu}>
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className={`${styles.menuBtn} ${styles.menuImg}`}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
