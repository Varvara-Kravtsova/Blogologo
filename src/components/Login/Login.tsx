import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { setPassword, setUser } from "../../store/slices/userSlice";
import {
 TabBlock,
 ErrorMassage,
 Title,
 LoginBlock,
 LoginButton,
 LoginForm,
 LoginInput,
 StyledLogin,
 TabIn,
 Tabs,
 TabUp,
 LoginPassword,
} from "./styles";

export const Login = () => {
 const navigate = useNavigate();
 const dispatch = useAppDispatch();
 const { register, handleSubmit } = useForm();
 const [isSignInError, setIsSignInError] = useState(false);

 const onSubmit = ({ email, password, name }: any) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    dispatch(setUser(userCredential.user.email));
    dispatch(setPassword(password));
    navigate(routes.ACCOUNT);
   })
   .catch((error) => {
    setIsSignInError(true);
   });
 };

 return (
  <StyledLogin onSubmit={handleSubmit(onSubmit)}>
   <TabBlock>
    <Tabs>
     <TabIn to={routes.SIGN_IN}>sign in</TabIn>
     <TabUp to={routes.SIGN_UP}>sign up</TabUp>
    </Tabs>
   </TabBlock>

   <LoginForm>
    <LoginBlock>
     <Title>Email</Title>
     <LoginInput type="email" placeholder="Your email" {...register("email")} />
    </LoginBlock>
    <LoginPassword>
     <Title>Password</Title>
     <LoginInput
      type="password"
      placeholder="Your password"
      {...register("password")}
     />
    </LoginPassword>
    {isSignInError ? (
     <ErrorMassage>The data is entered incorrectly. Try again</ErrorMassage>
    ) : (
     ""
    )}
    <LoginButton type="submit">sign in</LoginButton>
   </LoginForm>
  </StyledLogin>
 );
};
