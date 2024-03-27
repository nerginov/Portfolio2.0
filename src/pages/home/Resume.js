import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <section className={styles.resume}>
      <h1>RESUME</h1>
      <div className={styles.intro}>
        <article className={styles.objective}>
          <h2>Objective</h2>
          <p>
            Enthusiastic and motivated web developer with over three years of
            coding experience, mainly working with HTML, CSS, JavaScript,
            React.js, and Express.js. Skilled in frontend development with a
            strong understanding of core concepts and posses foundational
            knowledge in backend development.With passion for creating
            accessible, user-friendly web applications and eager to contribute
            my technical and problem-solving abilities to a dynamic team.
          </p>
        </article>
        <article className={styles["tech-stack-overview"]}>
          <h2>Tech Stack Overview</h2>
          <ul>
            <li>Programming Languages: JavaScript</li>
            <li>Frontend Framework/Library: React.js</li>
            <li>Backend Framework: Express.js</li>
            <li>Database: MySQL</li>
            <li>Markup Language: HTML</li>
            <li>Styling Language: CSS</li>
            <li>Version Control: Git,GitHub</li>
            <li>Additional Tools/Technologies: SASS</li>
          </ul>
        </article>
      </div>
      <div className={styles["concepts-container"]}>
        <article className={styles.concept}>
          <h2>HTML Concepts</h2>
          <ul>
            <li>
              Proficient in creating well-structured HTML documents adhering to
              best practices.
            </li>
            <li>
              Knowledgeable in using semantic HTML elements for improved
              accessibility and SEO.
            </li>
            <li>
              Experienced in utilizing HTML5 features for modern web
              development.
            </li>
            <li>
              Skilled in creating responsive web designs and ensuring
              accessibility standards are met.
            </li>
          </ul>
        </article>
        <article className={styles.concept}>
          <h2>CSS Concepts</h2>
          <ul>
            <li>
              Proficient in creating accessible CSS stylesheets for users with
              disabilities.
            </li>
            <li>
              Experienced in using SASS for efficient CSS preprocessing and
              organization.
            </li>
            <li>
              Knowledgeable in writing CSS that works consistently across
              different web browsers.
            </li>
            <li>
              Skilled in using Flexbox and CSS Grid for creating flexible and
              responsive layouts.
            </li>
            <li>
              Experienced in implementing CSS transitions and animations to
              enhance user experience.
            </li>
            <li>
              Understanding of CSS selectors and specificity rules for efficient
              styling.
            </li>
          </ul>
        </article>
        <article className={styles.concept}>
          <h2>JavaScript Concepts</h2>
          <ul>
            <li>
              Proficient in working with arrays and objects, including
              manipulation and iteration.
            </li>
            <li>
              Experienced in manipulating the Document Object Model (DOM) using
              JavaScript.
            </li>
            <li>
              Skilled in handling asynchronous operations using callbacks,
              promises, and async/await.
            </li>
            <li>
              Knowledgeable in making asynchronous HTTP requests using AJAX for
              dynamic content loading.
            </li>
            <li>
              Understanding of JavaScript scope and closures and their practical
              applications.
            </li>
            <li>
              Familiarity with ES6 features such as arrow functions, template
              literals, modules, etc.
            </li>
            <li>Aware of cross-browser compatibility issues and solutions.</li>
          </ul>
        </article>
        <article className={styles.concept}>
          <h2>React Concepts</h2>
          <ul>
            <li>
              Proficient in building applications using React's component-based
              architecture.
            </li>
            <li>
              Experienced in writing JSX syntax for creating React components.
            </li>
            <li>
              Skilled in managing component states and passing data via props.
            </li>
            <li>
              Knowledgeable in React component lifecycle methods and their
              usage.
            </li>
            <li>
              Proficient in using React hooks for state management and side
              effects.
            </li>
            <li>
              Experienced in conditionally rendering components based on state
              or props.
            </li>
            <li>Skilled in handling user events within React components.</li>
            <li>
              Familiar with client-side routing using libraries like React
              Router.
            </li>
            <li>
              Knowledgeable in using the Context API for managing global
              application state.
            </li>
          </ul>
        </article>
        <article className={styles.concept}>
          <h2>Express.js Concepts</h2>
          <ul>
            <li>
              Understanding of routing in Express.js to handle different HTTP
              requests (GET, POST, PUT, DELETE) and route paths.
            </li>
            <li>
              Experience in serving static files (e.g., CSS, images) using
              Express.js.
            </li>
            <li>
              Proficient in implementing CRUD (Create, Read, Update, Delete)
              operations in Express.js.
            </li>
            <li>
              Knowledgeable in integrating Express.js applications with MySQL
              databases for data storage and retrieval.
            </li>
          </ul>
        </article>
        <article className={styles.concept}>
          <h2>MySQL Concepts</h2>
          <ul>
            <li>
              Understanding of relational database concepts including tables,
              columns, rows, primary keys, foreign keys, indexes, normalization,
              and denormalization.
            </li>
            <li>
              Proficiency in writing SQL queries to perform various database
              operations such as SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY,
              ORDER BY, etc.
            </li>
            <li>
              Knowledge of data manipulation techniques in MySQL including
              adding, modifying, and deleting data using SQL commands.
            </li>
          </ul>
        </article>
      </div>
      <article className={styles.closing}>
        <h2>Wrap-Up</h2>
        <p>
          I'm confident in my coding skills and love making websites that are
          easy for everyone to use. I'm eager to join your team and work on
          exciting projects together!
        </p>
      </article>
    </section>
  );
};

export default Resume;
