import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userReducer";

export const Register = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { register, handleSubmit } = useForm();

 const onSubmit = (data: any) => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, data.email, data.password)
   .then((userCredential) => {
    dispatch(setUser(userCredential.user.email));
    navigate(routes.SIGN_IN);
   })
   .catch(console.error);
 };

 return (
  <div>
   <h1> Register</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register("name")} placeholder="Enter name" />
    <input type="email" {...register("email")} placeholder="Enter email" />
    <input
     type="password"
     {...register("password")}
     placeholder="Enter password"
    />
    <button type="submit">Sign Up</button>
   </form>
   <Link to={routes.SIGN_IN}>I have an account</Link>
  </div>
 );
};
