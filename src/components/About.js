const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-container-child">
        <div className="headshot-container">
          <img src="./headshot.png" alt="headshot" />
        </div>
        <h2>A b o u t</h2>
        <p>
          I am a Chicago-based full-stack software engineer with an eye for
          detail and desire to know more. While working primarily in Ruby and
          JavaScript frameworks, I have delighted in creating applications from
          ideation through to completion. I am passionate about solving problems
          - whether they be bugs in the code or the impetus for my next big
          project.
        </p>
      </div>
      <div className="about-container-child">
        <h2>T e c h n o l o g i e s</h2>
        <ul>
          <li>Ruby</li>
          <li>Rails</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <a href="./resume.pdf" target="_blank">
          RESUME
        </a>
      </div>
    </div>
  );
};

export default About;
