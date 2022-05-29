import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import { routers } from "../routes/routers";

export const AppRouter = () => {
 return (
  <Routes>
   <Route path={routers.HOME} element={<Home />} />
   <Route path={routers.SIGN_IN} element={<Login />} />
   <Route path={routers.SIGN_UP} element={<Register />} />
   <Route path={routers.NOT_FOUND} element={<NotFound />} />
  </Routes>
 );
};
