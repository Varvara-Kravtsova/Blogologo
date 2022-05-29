import { Link } from "react-router-dom";
import { routers } from "../routes/routers";

const Register = () => {
 return (
  <div>
   <h1> Register</h1>
   <Link to={routers.SIGN_IN}>I have an account</Link>
  </div>
 );
};

export default Register;
