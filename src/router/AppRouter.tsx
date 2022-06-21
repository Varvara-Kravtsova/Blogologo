import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import { Account } from "../pages/Account";
import { CartBooks } from "../pages/CartBooks";
import { DetailsBook } from "../pages/DetailsBook";
import { FavoritesBooks } from "../pages/FavoritesBooks";
import { Home } from "../pages/Home";
import { SearchBooks } from "../pages/SearchBooks";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { routes } from "../routes/routes";

export const AppRouter = () => {
 return (
  <Routes>
   <Route path={routes.HOME} element={<MainTemplate />}>
    <Route path={routes.HOME} element={<Home />} />
    <Route path={routes.DETAILS_BOOK} element={<DetailsBook />} />
    <Route path={routes.SEARCH} element={<SearchBooks />} />
    <Route path={routes.FAVORITES} element={<FavoritesBooks />} />
    <Route path={routes.CART} element={<CartBooks />} />
    <Route path={routes.SIGN_IN} element={<SignIn />} />
    <Route path={routes.SIGN_UP} element={<SignUp />} />
    <Route path={routes.ACCOUNT} element={<Account />} />
   </Route>
  </Routes>
 );
};
