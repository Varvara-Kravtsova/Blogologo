import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledBookItem = styled.li`
 display: -webkit-box;
 max-width: 330px;
 width: 100%;
 height: 100%;
 margin: 0 auto;
 padding: 4px;
 border-radius: 5px;
 background: ${Colors.GRAY};
 box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
 position: relative;
 &::before,
 &::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border: 2px solid pink;
  transition: all 0.3s ease-out;
 }
 &::before {
  background-color: #eea2ad;
  top: -15px;
  left: -15px;
 }
 &::after {
  bottom: -15px;
  right: -15px;
 }
 &:hover {
  &::before {
   top: 15px;
   left: 15px;
  }
  &::after {
   bottom: 15px;
   right: 15px;
  }
 }
`;

export const StyledLink = styled(Link)`
 display: flex;
 flex-direction: column;
`;

export const StyledImage = styled.img`
 max-width: 230px;
 width: 100%;
 margin: 0 45px;
`;

export const StyledTitle = styled.h3`
 color: ${Colors.PRIMARY};
 ${typography.H3}
 margin-bottom: 8px;
 height: 65px;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 text-overflow: ellipsis;
 overflow: hidden;
`;

export const StyledSubtitle = styled.p`
 ${typography.B2};
 margin-bottom: 35px;
 padding: 0 10px;
`;

export const StyledPrice = styled.h3`
 ${typography.H3}
 color: ${Colors.PRIMARY};
 align-content: flex-end;
 margin-top: auto;
 padding: 0 10px 10px;
`;
