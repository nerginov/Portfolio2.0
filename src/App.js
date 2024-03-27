import "./App.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hideClass, setHideClass] = useState(false);

  useEffect(() => {
    let hideTimeout;

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const navbarRect = navbar.getBoundingClientRect();

      // If the bottom of the navbar is above the viewport and the sidebar is not already shown, show it
      if (navbarRect.bottom < 0 && !showSidebar) {
        setShowSidebar(true);
        clearTimeout(hideTimeout); // Clear any existing hide timeout
      } else if (navbarRect.bottom >= 0 && showSidebar) {
        setHideClass(true);
        // Hide the sidebar after a delay when scrolling back up
        hideTimeout = setTimeout(() => {
          setHideClass(false);
          setShowSidebar(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
    };
  }, [showSidebar]);

  const scrollToSection = (id) => {
    //if clicked element is home, scroll to top of page
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //else scroll to the element with corresponding id
    else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      {showSidebar && (
        <Sidebar scrollToSection={scrollToSection} slideOut={hideClass} />
      )}
      <Home scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
