import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import { DetailsBook } from "../pages/DetailsBook";
import { FavoritesBooks } from "../pages/FavoritesBooks";
import { Home } from "../pages/Home";
import { SearchBooks } from "../pages/SearchBooks";
import { routes } from "../routes/routes";

export const AppRouter = () => {
 return (
  <Routes>
   <Route path={routes.HOME} element={<MainTemplate />}>
    <Route index element={<Home />} />
    <Route path={routes.DETAILS_BOOK} element={<DetailsBook />} />
    <Route path={routes.SEARCH} element={<SearchBooks />} />
    <Route path={routes.FAVORITES} element={<FavoritesBooks />} />
   </Route>
  </Routes>
 );
};
