import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../store/slices/settingsSlice";

const Header = () => {
  const { menuIsOpen } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <header className="app__header">
      <section>
        <Link to="/" className="app__logo">
          Ashraf-Ben-Slimane
        </Link>
        <ul className="app__menu">
          <NavLink to="/">_hello</NavLink>
          <NavLink to="/aboutme">_about-me</NavLink>
          <li>_projects</li>
        </ul>
      </section>
      <section>
        <ul className="app__menu">
          <li>
            <a href="mailto: benslimaneashraf@gmail.com">_contact-me</a>
          </li>
          <li className="app__hamburger" onClick={() => dispatch(toggleMenu())}>
            {menuIsOpen ? (
              <i className="ri-close-line ri-xl"></i>
            ) : (
              <i className="ri-menu-line ri-lg"></i>
            )}
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
