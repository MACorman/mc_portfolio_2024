import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [showTopOfPage, setShowTopOfPage] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    const handleShowTopOfPage = () => {
      window.pageYOffset > 500
        ? setShowTopOfPage(true)
        : setShowTopOfPage(false);
    };

    window.addEventListener("scroll", handleShowTopOfPage);
    return () => {
      window.removeEventListener("scroll", handleShowTopOfPage);
    };
  }, []);

  function handleShowHamburger() {
    setOpenHamburger((prevState) => !prevState);
  }

  return (
    <>
      <div className="nav-bar">
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        {showTopOfPage && <a href="#home">Home</a>}
      </div>
      <div className="hamburger">
        <RxHamburgerMenu onClick={handleShowHamburger} />
        {openHamburger && (
          <ul>
            <li>
              <a href="#home" onClick={handleShowHamburger}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleShowHamburger}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleShowHamburger}>
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" onClick={handleShowHamburger}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleShowHamburger}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
