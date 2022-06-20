import { Container, Logo, StyledHeader } from "./styles";
import { Link } from "react-router-dom";
import { Form } from "../SearchForm/SearchForm";
import { Nav } from "../Nav/Nav";

const Header = () => {
 return (
  <StyledHeader>
   <Container>
    <Link to={"/"}>
     <Logo />
    </Link>
    <Form />
    <Nav />
   </Container>
  </StyledHeader>
 );
};

export default Header;
