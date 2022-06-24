import ReactLoading from "react-loading";
import { StyledLoader } from "./styles";

const Loader = () => (
 <StyledLoader>
  <ReactLoading type={"balls"} color=" #eea2ad" height={"15%"} width={"15%"} />
 </StyledLoader>
);

export default Loader;
