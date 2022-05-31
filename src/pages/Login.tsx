import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export const Login = () => {
 return (
  <div>
   <h1>Login</h1>
   <Link to={routes.SIGN_UP}>Go to register</Link>
  </div>
 );
};
