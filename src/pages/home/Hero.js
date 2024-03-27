import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";

const Hero = ({ isTyping, typedText, scrollToSection }) => {
  return (
    <section className={styles.hero} aria-label="Hero Section">
      <h1 aria-live="polite">
        {/* Render typed text */}
        <span className={styles.self}>{typedText.split("\n")[0]}</span>
        <br />
        <span>{typedText.split("\n")[1]}</span>
        <br />
        <span>{typedText.split("\n")[2]}</span>
        {/* Render unicode symbol only when typing is complete */}
        {!isTyping && <span className={styles.unicode}>&#x25AA;&#xFE0E;</span>}
      </h1>
      {!isTyping && (
        <button
          onClick={() => {
            scrollToSection("projects");
          }}
          aria-label="Scroll to projects section"
        >
          Explore My Work
        </button>
      )}
    </section>
  );
};

export default Hero;
