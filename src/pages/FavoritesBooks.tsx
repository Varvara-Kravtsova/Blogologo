import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { BookFavorites } from "../components/BookFavorites/BookFavorites";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const FavoritesBooks = () => {
 //const { isAuth } = useSelector(({ user }: RootState) => user);
 //if (isAuth) {
 return (
  <>
   <BackButton />
   <Title>FAVORITES</Title>
   <BookFavorites />
  </>
 );
 //}
 //return <Navigate to={routes.SIGN_IN} />;
};
