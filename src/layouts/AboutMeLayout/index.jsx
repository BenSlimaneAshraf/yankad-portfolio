import { Outlet } from "react-router-dom";
import SidebarCategories from "../../components/SidebarCategories";

const AboutMeLayout = () => {
  return (
    <div className='aboutme_layout__main'>
      <SidebarCategories />
      <Outlet />
    </div>
  );
};

export default AboutMeLayout;
