import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";

export const Home = () => {
 return (
  <div>
   <h1>Home</h1>
   <Navigate to={routes.HOME} />
  </div>
 );
};
