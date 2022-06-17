import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../assets/icons";
import { StyledBackButton } from "./styles";

export const BackButton = () => {
 const navigate = useNavigate();

 const handleBack = () => {
  navigate(-1);
 };

 return (
  <StyledBackButton onClick={handleBack}>
   <ArrowLeft />
  </StyledBackButton>
 );
};

export default BackButton;
