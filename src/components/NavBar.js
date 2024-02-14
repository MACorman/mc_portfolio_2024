import { useEffect, useState } from "react";
const NavBar = () => {
  const [showTopOfPage, setShowTopOfPage] = useState(false);
  useEffect(() => {
    const handleShowTopOfPage = () => {
      window.pageYOffset > 300
        ? setShowTopOfPage(true)
        : setShowTopOfPage(false);
    };

    window.addEventListener("scroll", handleShowTopOfPage);
    return () => {
      window.removeEventListener("scroll", handleShowTopOfPage);
    };
  }, []);
  return (
    <div className="nav-bar">
      <a href="#contact">Contact</a>
      <a href="#blog">Blog</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      {showTopOfPage && <a href="#home">Home</a>}
    </div>
  );
};

export default NavBar;
