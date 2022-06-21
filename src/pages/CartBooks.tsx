import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { BookCart } from "../components/BookCart/BookCart";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const CartBooks = () => {
 const { isAuth } = useSelector(({ user }: RootState) => user);
 if (isAuth) {
  return (
   <>
    <BackButton />
    <Title>YOUR CART</Title>
    <BookCart />
   </>
  );
 }
 return <Navigate to={routes.SIGN_IN} />;
};
