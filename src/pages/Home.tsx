import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { RootStore } from "../store/store";

export const Home = () => {
 const { isAuth, email } = useSelector(({ user }: RootStore) => user);

 if (isAuth) {
  return <div>{email}</div>;
 }

 return <Navigate to={routes.SIGN_UP} />;
};
