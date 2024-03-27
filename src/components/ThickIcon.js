import React from "react";
import styles from "./ThickIcon.module.scss";

const TickIcon = () => {
  return (
    <div
      className={`${styles["icon-animated"]} ${styles["icon-animated-tick"]}`}
    >
      <svg
        className={styles.circle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>

      <div className={styles.tick}>
        <svg
          className={styles["tick-leg1"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 52"
        >
          <polygon points="1,41 0,48 25,52 25,45" />
        </svg>
        <svg
          className={styles["tick-leg2"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 52"
        >
          <polygon points="18,45 25,47 25,0 18,0" />
        </svg>
      </div>
    </div>
  );
};

export default TickIcon;
