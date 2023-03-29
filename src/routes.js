import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutMeLayout from "./layouts/AboutMeLayout";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='aboutme' element={<AboutMeLayout />}>
            <Route
              index
              element={
                <Navigate to='/aboutme/personal/biography' replace={true} />
              }
            />
            <Route path='personal'>
              <Route
                index
                element={
                  <Navigate to='/aboutme/personal/biography' replace={true} />
                }
              />
              <Route path='biography' element={<AboutMe />} />
              <Route path='interests' element={<AboutMe />} />
              <Route path='education'>
                <Route path='high-school' element={<AboutMe />} />
                <Route path='university' element={<AboutMe />} />
              </Route>
            </Route>
            <Route path='professional'>
              <Route
                index
                element={
                  <Navigate
                    to='/aboutme/professional/companies/taki-academy'
                    replace={true}
                  />
                }
              />
              <Route path='companies'>
                <Route path='taki-academy' element={<AboutMe />} />
                <Route path='ostedhy' element={<AboutMe />} />
                <Route path='softylines' element={<AboutMe />} />
              </Route>
            </Route>
            <Route path='hobbies'>
              <Route
                index
                element={
                  <Navigate
                    to='/aboutme/hobbies/interests/photography'
                    replace={true}
                  />
                }
              />
              <Route path='interests'>
                <Route path='photography' element={<AboutMe />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
