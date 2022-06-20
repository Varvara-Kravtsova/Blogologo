import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Search } from "../../assets/icons";
import { SearchInput, SearchButton, StyledForm } from "./styles";

export const Form = () => {
 const { register, handleSubmit } = useForm();
 const navigate = useNavigate();

 const onSubmit = (data: any) => {
  navigate(`/bookstore/search/${data.title}/1`);
 };

 return (
  <StyledForm onSubmit={handleSubmit(onSubmit)}>
   <SearchInput placeholder="Search" type="text" {...register("title")} />
   <SearchButton type="submit">
    <Search />
   </SearchButton>
  </StyledForm>
 );
};
