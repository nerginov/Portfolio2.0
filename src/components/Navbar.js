import styles from "./Navbar.module.scss";

const Navbar = ({ scrollToSection }) => {
  // Function to handle click on navigation links
  const handleClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default behavior of anchor tags
    event.stopPropagation(); // Mainly implemented for contact li(to prevent double trigger)
    scrollToSection(sectionId); // Scroll to the specified section
  };

  return (
    <nav id="navbar" className={styles.navbar} aria-label="Main Navigation">
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
    </nav>
  );
};

export default Navbar;
