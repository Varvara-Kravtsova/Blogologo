import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { StyledApp, StyledContainer } from "./styles";

const MainTemplate = () => {
 return (
  <StyledApp>
   <StyledContainer>
    <Header />
    <Outlet />
    <Footer />
   </StyledContainer>
  </StyledApp>
 );
};

export default MainTemplate;
