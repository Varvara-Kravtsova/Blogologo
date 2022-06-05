import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import { Home } from "../pages/Home";
import { routes } from "../routes/routes";

export const AppRouter = () => {
 return (
  <Routes>
   <Route path={routes.HOME} element={<MainTemplate />}>
    <Route path={routes.HOME} element={<Home />} />
   </Route>
  </Routes>
 );
};
