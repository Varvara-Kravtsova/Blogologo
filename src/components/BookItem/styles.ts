import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBookItem = styled(motion.div)`
 padding: 1rem;
 border-radius: 10px;
 box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

const StyledLink = styled(Link)`
 display: flex;
 flex-direction: column;
`;

export { StyledBookItem, StyledLink };
