import styles from "./Home.module.scss";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Resume from "./Resume";
import circle from "../../assets/circle.svg";
import { useState, useEffect } from "react";

const Home = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true); // showing hero elements based on the state

  //typewriting
  useEffect(() => {
    // Define the text for typing
    const text = "I'm a\nFRONTEND\nWEB DEVELOPER\n&#x25AA;";
    let currentIndex = 0;

    // Set up interval for typing animation
    const interval = setInterval(() => {
      setTypedText((prevTypedText) => {
        // Get the substring to be displayed
        const newText = text.substring(0, currentIndex + 1);
        currentIndex++;
        // If typing is complete, clear the interval and set isTyping to false
        if (currentIndex === text.length) {
          clearInterval(interval);
          setIsTyping(false); // Set isTyping to false when typing ends
        }
        return newText;
      });
    }, 50);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once, similar to componentDidMount

  return (
    <div className={styles.home}>
      {isTyping ? (
        ""
      ) : (
        <span className={styles["home-circle"]}>
          <img src={circle} alt="" />
        </span>
      )}
      <Hero
        typedText={typedText}
        isTyping={isTyping}
        scrollToSection={scrollToSection}
      />
      <About />
      <Projects />
      {/* <Resume /> */}
      <TechStack />
      <Contact />
    </div>
  );
};
export default Home;
