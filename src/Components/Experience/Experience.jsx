import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";

import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={historyItem.organisation}
                />
                <div className={styles.historyItemDetails}>
                  <h2>{`${historyItem.role}, ${historyItem.organisation}`}</h2>
                  <p>{`${historyItem.endDate} - ${historyItem.organisation}`}</p>
                  <br />
                  <ul>
                    {historyItem.experiences.map((Experience, id) => {
                      return <li key={id}>{Experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
