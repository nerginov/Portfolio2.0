import styles from "./TechStack.module.scss";
import git from "../../assets/stack/git.svg";
import html from "../../assets/stack/html.svg";
import css from "../../assets/stack/css.svg";
import react from "../../assets/stack/react.svg";
import express from "../../assets/stack/express.svg";
import javascript from "../../assets/stack/javascript.svg";
import sass from "../../assets/stack/sass.svg";
import mysql from "../../assets/stack/mysql.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const TechStack = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      className={`${styles["tech-stack"]} ${
        isVisible ? styles.intersectedTech : " "
      }`}
      id="tech-stack"
      aria-label="tech-stack-section"
      ref={ref}
    >
      <h1>TECH STACK</h1>
      <div className={styles["stack-container"]}>
        <div className={styles["stack-container__inner"]}>
          <img src={html} alt="HTML-logo" />
          <span>HTML5</span>
        </div>
        <div className={styles["stack-container__inner"]}>
          <img src={css} alt="CSS-logo" />
          <span>CSS3</span>
        </div>
        <div className={styles["stack-container__inner"]}>
          <img src={sass} alt="SASS-logo" />
          <span>SASS</span>
        </div>
        <div className={styles["stack-container__inner"]}>
          <img src={javascript} alt="Javascript-logo" />
          <span>Javascript</span>
        </div>
        <div className={styles["stack-container__inner"]}>
          <img src={git} alt="Git-logo" />
          <span>Git</span>
        </div>

        <div className={styles["stack-container__inner"]}>
          <img src={react} alt="React-logo" />
          <span>React</span>
        </div>
        <div className={styles["stack-container__inner"]}>
          <img src={express} alt="Express.js-logo" />
          <span>Express.js</span>
        </div>
        <div className={styles["stack-container__inner"]}>
          <img src={mysql} alt="Mysql-logo" />
          <span>mySQL</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
