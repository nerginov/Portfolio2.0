import styles from "./Project.module.scss";
import world from "../assets/svgworld.svg";
import github from "../assets/github-brands.svg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useWindowResize from "../hooks/useWindowResize";

const Project = ({
  img,
  projectNumber,
  title,
  description,
  stack,
  githubURL,
  siteURL,
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  const windowWidth = useWindowResize();

  return (
    <div
      className={`${styles.project} ${isVisible && styles.intersectedProject} ${
        windowWidth > 767 && projectNumber % 2 === 0 && styles["right-based"]
      }  ${windowWidth < 767 && styles["right-based"]}`} //on phone every should be right-based
      ref={ref}
    >
      <div className={styles["project-description"]}>
        <h2>
          Project {projectNumber}
          <div className={styles.links}>
            {/* links hrefs should be passed from parent component*/}
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="github-logo"
                aria-label="View project github page"
                className={styles.github}
              />
            </a>{" "}
            <a target="_blank" href={siteURL} rel="noopener noreferrer">
              <img
                src={world}
                alt="earth"
                aria-label="View project live site"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </h2>
        {windowWidth < 768 && (
          <div className={styles["project-img"]}>
            <div className={styles["img-border"]}>
              <img src={img} alt="project img" />
            </div>
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <p className={styles["project-stack"]}>
          {stack.split(",").map((item) => {
            return <span>{item}</span>;
          })}
        </p>
      </div>
      {windowWidth > 767 && (
        <div className={styles["project-img"]}>
          <div className={styles["img-border"]}>
            <img src={img} alt="project img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
