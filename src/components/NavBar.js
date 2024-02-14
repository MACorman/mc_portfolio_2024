const NavBar = (props) => {
  function handleSelectPage(e) {
    const page = e.target.innerText.toLowerCase();
    props.onSelectPage(page);
  }
  return (
    <div>
      <span onClick={handleSelectPage}>Home</span>
      <span onClick={handleSelectPage}>About</span>
      <span onClick={handleSelectPage}>Projects</span>
      <span onClick={handleSelectPage}>Blog</span>
      <span onClick={handleSelectPage}>Contact</span>
    </div>
  );
};

export default NavBar;
