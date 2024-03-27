import styles from "./Footer.module.scss";

const Footer = ({ scrollToSection }) => {
  // Function to handle click on navigation links
  const handleClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default behavior of anchor tags
    scrollToSection(sectionId); // Scroll to the specified section
  };
  return (
    <footer>
      <div className={styles.navigation} role="navigation">
        <ul>
          <li>
            <a
              onClick={(e) => handleClick("home", e)}
              href="/"
              aria-label="Scroll to Top of Home Page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={(e) => handleClick("about", e)}
              href="/"
              aria-label="Scroll to About Section"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={(e) => handleClick("projects", e)}
              href="/"
              aria-label="Scroll to Projects Section"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={(e) => handleClick("tech-stack", e)}
              href="/"
              aria-label="Scroll to Tech Stack Section"
            >
              Tech Stack
            </a>
          </li>
          <li onClick={(e) => handleClick("contact", e)}>
            <a
              onClick={(e) => handleClick("contact", e)}
              href="/"
              aria-label="Scroll to Contact Section"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className={styles["copyright"]}>
        <p>&copy; 2024 Soner Hyuseinov. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
