import styles from "./About.module.scss";
// import img from "../../assets/IMGOFMENOBG.png";
import img1 from "../../assets/IMGOFME2.jpg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useWindowResize from "../../hooks/useWindowResize";

const About = () => {
  const windowWidth = useWindowResize();
  const [ref, isVisible] = useIntersectionObserver();
  //function to open github/linkedin profile in a new tab
  const redirectToProfile = (profile) => {
    window.open(
      profile == "linkedin"
        ? "https://www.linkedin.com/in/soner-hyuseinov/"
        : "https://github.com/nerginov?tab=repositories",
      "_blank"
    );
  };

  return (
    <section
      ref={ref}
      className={`${styles.about} ${isVisible ? styles.intersectedAbout : ""}`}
      id="about"
      aria-label="About Section"
    >
      {windowWidth > 767 && (
        <div className={styles["img-container"]}>
          <div className={styles["img-border"]}>
            <img src={img1} alt="A photo of me" />
          </div>
        </div>
      )}{" "}
      {/*control img position on diff sizes*/}
      <div className={styles["text-container"]}>
        <h2>ABOUT ME</h2>
        {windowWidth < 768 && (
          <div className={styles["img-container"]}>
            <div className={styles["img-border"]}>
              <img src={img1} alt="A photo of me" />
            </div>
          </div>
        )}
        <p>
          Hello there!👋 <br /> Thanks for checking out my portfolio. I'm Soner,
          a 27-year-old Frontend Developer from Bulgaria, now based in Vienna,
          Austria. <br />I specialize in{" "}
          <span>HTML, CSS, JavaScript, React.js, and Express.js</span>.<br />
          My curiosity drives me to learn and improve with each project, and I
          love the challenge of fast-paced environments. <br />
          I'm a problem-solver at heart, always finding ways to overcome
          obstacles. Outside of work, you'll find me enjoying sports and gaming,
          seeking new adventures on and off the screen. <br />
          Thanks for taking the time to learn a bit about me. Let's create
          something awesome together!
        </p>
        <div className={styles.profiles}>
          <button
            className={styles.linkedin}
            aria-label="Visit my LinkedIn profile"
            onClick={() => {
              redirectToProfile("linkedin");
            }}
          >
            LinkedIn
          </button>
          <button
            className={styles.github}
            aria-label="Visit my LinkedIn profile"
            onClick={() => {
              redirectToProfile("github");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
