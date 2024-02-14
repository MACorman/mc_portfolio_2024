import "./App.css";
import FrontPage from "./components/FrontPage";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  function handleSelectedPage(page) {
    setSelectedPage(page);
    console.log(page);
  }
  return (
    <div className="App">
      <NavBar onSelectPage={handleSelectedPage} />
      {selectedPage === "home" && <FrontPage />}
      {selectedPage === "about" && <About />}
      {selectedPage === "projects" && <Projects />}
      {selectedPage === "blog" && <Blog />}
      {selectedPage === "contact" && <Contact />}
    </div>
  );
}

export default App;
