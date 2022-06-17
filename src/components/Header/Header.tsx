import { Container, Logo, StyledHeader } from "./styles";
import { Link } from "react-router-dom";
import { Form } from "../FormSearch/Form";
import { Nav } from "../Nav/Nav";

const Header = () => {
 return (
  <StyledHeader>
   <Container>
    <Link to={"/bookstore"}>
     <Logo />
    </Link>
    <Form />
    <Nav />
   </Container>
  </StyledHeader>
 );
};

export default Header;
