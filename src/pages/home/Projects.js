import styles from "./Projects.module.scss";
import rockImg from "../../assets/RockM300.jpg";
import siallureImg from "../../assets/siallureM300.jpg";
import urlImg from "../../assets/UrlM300.jpg";
import worldImg from "../../assets/WorldM300.jpg";
import multiFormImg from "../../assets/multiformM300.jpg";
import Project from "../../components/Project";

const Projects = () => {
  return (
    <section
      className={styles.projects}
      id="projects"
      aria-label="projects-section"
    >
      <h1>PROJECTS</h1>
      <Project
        githubURL="https://github.com/nerginov/E-Commerce"
        siteURL="https://e-commerce-tu1r.onrender.com/"
        img={siallureImg}
        projectNumber="1"
        title="Siallure E-commerce (Development Stage)"
        description="Siallure is an e-commerce platform created to feature handmade earrings. Our goal is to provide a smooth shopping experience for customers looking for distinctive and personalized accessories. While the project is currently in development, it's aimed at preparing for real-world usage.
        "
        stack="HTML,SCSS,React,Express.js,MySQL,Stripe"
      ></Project>
          <Project
        githubURL="https://github.com/nerginov/Multi-step-Form"
        siteURL="https://multi-step-form-wvzz.onrender.com/"
        img={multiFormImg}
        projectNumber="2"
        title="Multi-Step Form"
        description="The Multi-Step Form is a React-based application designed to streamline the process of collecting user information across multiple steps. It offers dynamic form progression, input validation, flexible billing options, and add-on selection, ensuring a seamless user experience from start to finish.
        "
        stack="HTML,SCSS,React"
      ></Project>
      <Project
        githubURL="https://github.com/nerginov/World-Countries"
        siteURL="https://nerginov.github.io/World-Countries/"
        img={worldImg}
        projectNumber="3"
        title="World-Countries"
        description="World-Countries is designed to offer users a seamless experience in exploring various countries and their attributes. The application presents a user-friendly interface where users can easily navigate through countries, search for specific countries, and filter them by region. Each country is displayed with key information such as population, region, capital, and flag. Please read the Github ReadMe for further information."
        stack="HTML,SCSS,Javascript,API"
      ></Project>
      <Project
        githubURL="https://github.com/nerginov/Rock-Paper-Scissors-Lizard-Spock"
        siteURL="https://rockk-paperr-scissorss-lizardd-spockk.netlify.app/"
        img={rockImg}
        projectNumber="4"
        title="Rock,Paper,Scissors,Lizard,Spock"
        description="Rock Paper Scissors Lizard Spock is a React application that allows users to play the popular game Rock, Paper, Scissors against the computer. The game follows the rules of the classic game but adds two additional options, Lizard and Spock, increasing the number of possible outcomes. Please read the Github ReadMe for further information."
        stack="HTML,SCSS,React"
      ></Project>
      <Project
        githubURL="https://github.com/nerginov/url-shortener"
        siteURL="https://nerginov.github.io/url-shortener/"
        img={urlImg}
        projectNumber="5"
        title="Url Shortener"
        description="The Url Shortener project is a one-page web application designed to simplify the process of shortening URLs using the shrtlnk.dev API. This application allows users to easily shorten long URLs, making them more manageable and easier to share."
        stack="HTML,SCSS,Javascript,API"
      ></Project>
    </section>
  );
};

export default Projects;
