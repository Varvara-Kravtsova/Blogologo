import { useForm } from "react-hook-form";
import {
 StyledSubscribe,
 SubscribeTitle,
 SubscribeSubtitle,
 SubscribeInput,
 SubscribeButton,
 SubscribeForm,
 Container,
 SubscribeBlock,
} from "./styles";

type FormValue = {
 email: string;
};

const Subscribe = () => {
 const { register } = useForm<FormValue>();
 return (
  <StyledSubscribe>
   <Container>
    <SubscribeBlock>
     <SubscribeTitle>Subscribe to Newsletter</SubscribeTitle>
     <SubscribeSubtitle>
      Be the first to know about new IT books, upcoming releases, exclusive
      offers and more.
     </SubscribeSubtitle>
     <SubscribeForm>
      <SubscribeInput
       type="email"
       placeholder="Your email"
       {...register("email", { required: true })}
      />
      <SubscribeButton>Subscribe</SubscribeButton>
     </SubscribeForm>
    </SubscribeBlock>
   </Container>
  </StyledSubscribe>
 );
};

export default Subscribe;
