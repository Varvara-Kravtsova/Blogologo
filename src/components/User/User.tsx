import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { setUserName, setUser } from "../../store/slices/userSlice";
import {
 StyledUser,
 UserForm,
 Input,
 Title,
 Subtitle,
 DataBlock,
 Button,
 Notification,
 DataMail,
} from "./styles";

export const User = () => {
 const { register, handleSubmit } = useForm();
 const { name, email } = useAppSelector(getUserInfo);
 const dispatch = useDispatch();

 const [isChange, setIsChange] = useState(false);

 const onSubmit = (data: any) => {
  dispatch(setUser(data.email));
  dispatch(setUserName(data.name));
  setIsChange(true);
 };

 return (
  <>
   <StyledUser onSubmit={handleSubmit(onSubmit)}>
    <Subtitle>PROFILE</Subtitle>
    <UserForm>
     <DataBlock>
      <Title>Name</Title>
      <Input type="text" placeholder={name} {...register("name")} />
     </DataBlock>
     <DataMail>
      <Title>Email</Title>
      <Input placeholder={email} type="email" {...register("email")} />
     </DataMail>
    </UserForm>
    {isChange ? <Notification>Changes saved</Notification> : ""}
    <Button type="submit">Save changes</Button>
   </StyledUser>
  </>
 );
};
