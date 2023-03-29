import { useLocation } from "react-router-dom";
import Categories from "./Categories";
import PersonalMenu from "./PersonalMenu";
import ProfessionalMenu from "./ProfessionalMenu";
import HobbiesMenu from "./HobbiesMenu";

const SidebarCategories = () => {
  let location = useLocation();

  return (
    <div className='sidebar_categories__main'>
      <Categories />
      {location.pathname.indexOf("professional") > 0 && <ProfessionalMenu />}
      {location.pathname.indexOf("personal") > 0 && <PersonalMenu />}
      {location.pathname.indexOf("hobbies") > 0 && <HobbiesMenu />}
    </div>
  );
};

export default SidebarCategories;
