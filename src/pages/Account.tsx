import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { User } from "../components/User/User";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const Account = () => {
 const { isAuth } = useSelector(({ user }: RootState) => user);

 if (isAuth) {
  return (
   <>
    <BackButton />
    <Title>ACCOUNT</Title>
    <User />
   </>
  );
 }
 return <Navigate to={routes.SIGN_IN} />;
};
