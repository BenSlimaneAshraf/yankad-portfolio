const Footer = () => {
  return (
    <footer className="app__footer">
      <section>
        <span className="app__logo">find me in:</span>
        <ul className="app__menu">
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/ashrafbenslimane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill ri-lg"></i>
            </a>
          </li>
          {/* <li className="icon">
            <i className="ri-youtube-fill ri-lg"></i>
          </li> */}
        </ul>
      </section>
      <section>
        <ul className="app__menu">
          <li className="github__link">
            <a
              href="https://github.com/BenSlimaneAshraf"
              target="_blank"
              rel="noopener noreferrer"
              className="github__username"
            >
              @BenSlimaneAshraf
            </a>
            <i className="ri-github-fill ri-lg"></i>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
