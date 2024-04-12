import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I am <br /> Abhishek Laderpet Sudarshan
        </h1>
        <p className={styles.description}>
          I am a full stack Developer with 3 years of experience in Java Spring
          boot, react.
          <br />
          <br /> I am currently pursuing my Master's Degree from{" "}
          <a
            href="https://www.google.com/search?q=IUPUI"
            className={styles.iupui}
          >
            IUPUI
          </a>{" "}
          in Computer Science. I will be graduating in the month of May 2024.
        </p>
        <a
          href="mailto:abhishek.l.s9198@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/linkedIn.jpg")}
        alt="Abhishek "
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
