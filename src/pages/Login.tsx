import { Link } from "react-router-dom";
import { routers } from "../routes/routers";

const Login = () => {
 return (
  <div>
   <h1>Login</h1>
   <Link to={routers.SIGN_UP}>Go to register</Link>
  </div>
 );
};

export default Login;
