import "./App.css";
import FrontPage from "./components/FrontPage";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
// import { useState } from "react";

function App() {
  // function handleSelectedPage(page) {
  //   window.location.replace(`/#${page}`);
  // }

  return (
    <div className="App">
      <NavBar />
      <div className="page-container">
        <FrontPage />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
