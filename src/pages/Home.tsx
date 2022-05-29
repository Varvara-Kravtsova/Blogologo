import { Navigate } from "react-router-dom";
import { routers } from "../routes/routers";

export const Home = () => {
 return <Navigate to={routers.SIGN_UP} />;
};
