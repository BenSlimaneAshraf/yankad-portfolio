import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const MainLayout = () => {
  const { menuIsOpen } = useSelector((state) => state.settings);
  return (
    <div className='main-layout'>
      <Header />
      <Outlet />
      <Footer />
      {menuIsOpen && <Menu />}
    </div>
  );
};

export default MainLayout;
