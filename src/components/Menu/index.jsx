import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/slices/settingsSlice";

const Menu = () => {
  //   const { menuIsOpen } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <menu className='app__hamburger__menu'>
      <ul className='app__menu' onClick={() => dispatch(closeMenu())}>
        <li className='active'>_hello</li>
        <li>_about-me</li>
        <li>_projects</li>
        <li>_contact-me</li>
      </ul>
    </menu>
  );
};

export default Menu;
