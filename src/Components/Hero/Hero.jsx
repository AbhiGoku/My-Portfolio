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
          "I have three years of experience as a full stack developer with
          expertise in Java, Spring Boot, and React. <br /> Throughout my
          career, I have been involved in all phases of the software development
          life cycle, from writing code to deployment, gaining comprehensive
          knowledge and hands-on experience in managing software projects.
          <br />
          <br />
          Also, I recently graduated with a Master's Degree in Computer Science
          from{" "}
          <a
            href="https://www.google.com/search?q=IUPUI"
            className={styles.iupui}
          >
            Purdue University
          </a>{" "}
          in May 2024
        </p>
        <a
          href="https://drive.google.com/drive/u/2/folders/10XdMeypxMztzkdhQZioKIPR6g02ijx5c"
          className={styles.contactBtn}
          target="_blank"
        >
          Download Resume
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
