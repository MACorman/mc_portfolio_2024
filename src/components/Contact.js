const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-email">
        <p>Interested in getting in touch?</p>
        <a href="mailto:madelinecorman@gmail.com">SEND ME AN EMAIL</a>
      </div>
      <div className="contact-social">
        <p>Or connect with me on the following platforms:</p>
        <span id="contact">
          <a
            href="https://www.linkedin.com/in/madeline-corman/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </span>
        <span>
          <a
            href="https://medium.com/@madelinecorman"
            target="_blank"
            rel="noreferrer"
          >
            MEDIUM
          </a>
        </span>
        <span>
          <a
            href="https://github.com/MACorman"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
