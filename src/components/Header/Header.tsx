import { Container, Logo, StyledHeader } from "./styles";

import { Link } from "react-router-dom";

const Header = () => {
 return (
  <StyledHeader>
   <Container>
    <Link to={"/bookstore"}>
     <Logo />
    </Link>
   </Container>
  </StyledHeader>
 );
};

export default Header;
