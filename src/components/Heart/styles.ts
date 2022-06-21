import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledHeart = styled.div`
 ${typography.button}
 transition: 0.25s linear;
 &:hover {
  path {
   stroke: ${Colors.RED};
  }
 }
 &:active {
  path {
   fill: ${Colors.RED};
  }
 }
 &:disabled {
  background-color: ${Colors.SECONDARY};
 }
`;
