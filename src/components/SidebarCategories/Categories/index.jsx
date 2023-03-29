import { NavLink } from "react-router-dom";
import { ReactComponent as ProfessionalIco } from "../../../assets/icons/console.svg";
import { ReactComponent as PersonalIco } from "../../../assets/icons/personal.svg";
import { ReactComponent as HobbieslIco } from "../../../assets/icons/hobbies.svg";

const Categories = () => {
  return (
    <div className='sc_categories__main'>
      <NavLink to='/aboutme/professional'>
        <ProfessionalIco />
      </NavLink>
      <NavLink to='/aboutme/personal'>
        <PersonalIco />
      </NavLink>
      <NavLink to='/aboutme/hobbies'>
        <HobbieslIco />
      </NavLink>
    </div>
  );
};

export default Categories;
