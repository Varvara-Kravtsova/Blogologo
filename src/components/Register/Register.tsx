import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import {
 setPassword,
 setUser,
 setUserName,
} from "../../store/slices/userSlice";
import {
 TabBlock,
 ErrorMassage,
 Title,
 RegisterBlock,
 RegisterButton,
 RegisterForm,
 RegisterPassword,
 RegisterInput,
 StyledRegister,
 TabIn,
 Tabs,
 TabUp,
} from "./styles";

export const Register = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { register, handleSubmit } = useForm();
 const [isSignUpError, setIsSignUpError] = useState(false);

 const onSubmit = (data: any) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, data.email, data.password)
   .then((userCredential) => {
    dispatch(setUser(userCredential.user.email));
    dispatch(setUserName(data.name));
    dispatch(setPassword(data.password));
    navigate(routes.SIGN_IN);
   })
   .catch((error) => {
    setIsSignUpError(true);
   });
 };

 return (
  <StyledRegister onSubmit={handleSubmit(onSubmit)}>
   <TabBlock>
    <Tabs>
     <TabIn to={routes.SIGN_IN}>sign in</TabIn>
     <TabUp to={routes.SIGN_UP}>sign up</TabUp>
    </Tabs>
   </TabBlock>

   <RegisterForm>
    <RegisterBlock>
     <Title>Name</Title>
     <RegisterInput type="text" placeholder="Your name" {...register("name")} />
    </RegisterBlock>
    <RegisterBlock>
     <Title>Email</Title>
     <RegisterInput
      type="email"
      placeholder="Your email"
      {...register("email")}
     />
    </RegisterBlock>
    <RegisterBlock>
     <Title>Password</Title>
     <RegisterInput
      type="password"
      placeholder="Your password"
      {...register("password")}
     />
    </RegisterBlock>
    <RegisterPassword>
     <Title>Confirm password</Title>
     <RegisterInput
      type="password"
      placeholder="Confirm your password"
      {...register("password")}
     />
    </RegisterPassword>

    {isSignUpError ? (
     <ErrorMassage>The data is entered incorrectly. Try again</ErrorMassage>
    ) : (
     ""
    )}
    <RegisterButton type="submit">sign up</RegisterButton>
   </RegisterForm>
  </StyledRegister>
 );
};
