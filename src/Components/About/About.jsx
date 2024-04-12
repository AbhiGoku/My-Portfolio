import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Picture1.jpeg")}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h2>FrontEnd Developer</h2>
              <p>
                I am a front end developer with experience in building
                responsive website using React, HTML, CSS
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h2>BackEnd Developer</h2>
              <p>
                I have 3 years of professional experience in build APIs using
                Java Spring Boot
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
