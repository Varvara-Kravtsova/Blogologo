import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import { routes } from "../routes/routes";

export const AppRouter = () => {
 return (
  <Routes>
   <Route path={routes.HOME} element={<Home />} />
   <Route path={routes.SIGN_IN} element={<Login />} />
   <Route path={routes.SIGN_UP} element={<Register />} />
   <Route path={routes.NOT_FOUND} element={<NotFound />} />
  </Routes>
 );
};
