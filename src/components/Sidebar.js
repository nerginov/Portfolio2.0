import styles from "./Sidebar.module.scss";
import home from "../assets/sidebar/home.svg";
import about from "../assets/sidebar/about.svg";
import projects from "../assets/sidebar/projects.svg";
import techstack from "../assets/sidebar/techstack.svg";
import contact from "../assets/sidebar/contact.svg";
// import react from "react";
import { useState } from "react";

const Sidebar = ({ scrollToSection, slideOut }) => {
  // Function to handle click on navigation links
  const handleClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default behavior of anchor tags
    event.stopPropagation(); // Mainly implemented for li(to prevent double trigger)
    scrollToSection(sectionId); // Scroll to the specified section
  };

  return (
    <div
      className={`${styles.sidebar} ${slideOut ? styles.slideOut : " "}`}
      role="navigation"
    >
      <ul>
        <li onClick={(e) => handleClick("home", e)}>
          <a
            onClick={(e) => handleClick("home", e)}
            href="/"
            aria-label="Scroll to Top of Home Page"
          >
            <p>Home</p>
            <img src={home} alt="Home-icon" />
          </a>
        </li>
        <li onClick={(e) => handleClick("about", e)}>
          <a
            onClick={(e) => handleClick("about", e)}
            href="/"
            aria-label="Scroll to About Section"
          >
            <p>About</p>
            <img src={about} alt="About-icon" />
          </a>
        </li>
        <li onClick={(e) => handleClick("projects", e)}>
          <a
            onClick={(e) => handleClick("projects", e)}
            href="/"
            aria-label="Scroll to Projects Section"
          >
            <p>Projects</p>
            <img src={projects} alt="Projects-icon" />
          </a>
        </li>
        <li onClick={(e) => handleClick("tech-stack", e)}>
          <a
            onClick={(e) => handleClick("tech-stack", e)}
            href="/"
            aria-label="Scroll to Tech-Stack Section"
          >
            <p>
              Tech
              <br />
              Stack
            </p>
            <img src={techstack} alt="Tech-Stack-icon" />
          </a>
        </li>
        <li onClick={(e) => handleClick("contact", e)}>
          <a
            onClick={(e) => handleClick("contact", e)}
            href="/"
            aria-label="Scroll to Contact Section"
          >
            <p>Contact</p>
            <img src={contact} alt="Contact-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
