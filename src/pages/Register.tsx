import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

const Register = () => {
 return (
  <div>
   <h1> Register</h1>
   <Link to={routes.SIGN_IN}>I have an account</Link>
  </div>
 );
};

export default Register;
