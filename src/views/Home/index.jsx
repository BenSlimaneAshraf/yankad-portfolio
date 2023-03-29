import SnakeGame from "../../components/SnakeGame";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <main className="home__main">
      <section className="home__container">
        <section>
          <article>
            <span className="user__welcome">Hi all. I am</span>
            <span className="user__name">Ashraf Ben Slimane</span>
            <span className="user__position">
              <i className="ri-arrow-right-s-line ri-lg"></i>
              <span className="user__position__title">
                UX/UI Designer & Front-end developer
              </span>
            </span>
          </article>
          <section>
            {/* <span>//</span> */}
            <span className="github__comment">
              {`// you can also see it on my Github page`}
            </span>
            <span className="github__link">
              <span className="github__const">const</span>
              <span className="github__variable">githubLink</span>
              <span className="github__same">=</span>
              <a
                className="github__url"
                href="https://github.com/BenSlimaneAshraf/yankad-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                “https://github.com/BenSlimaneAshraf/yankad-portfolio”
              </a>
            </span>
          </section>
        </section>
        {width >= 586 && <SnakeGame />}
      </section>
    </main>
  );
};

export default Home;
