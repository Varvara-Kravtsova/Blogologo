import { Link } from "react-router-dom";
import styled from "styled-components";
import { Circle, Heart, Cart, User } from "../../assets/icons";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

const StyledNav = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 184px;
 width: 100%;
 ${media.tablet} {
  max-width: 120px;
 }
 ${media.mobile} {
  max-width: 100px;
 }
`;

const StyledLink = styled(Link)`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 56px;
 height: 56px;
 border-bottom: 2px solid transparent;
 &:hover {
  border-bottom: 2px solid ${Colors.PRIMARY};
 }
 &:active {
  border-bottom: 2px solid #bebebe;
 }
 ${media.tablet} {
  width: 36px;
  height: 36px;
 }
 ${media.mobile} {
  width: 25px;
  height: 25px;
 }
`;

const IconFavorites = styled(Heart)`
 width: 24px;
 height: 24px;
 ${media.mobile} {
  width: 18px;
  height: 18px;
 }
`;

const IconShopping = styled(Cart)`
 width: 24px;
 height: 24px;
 position: relative;
 ${media.mobile} {
  width: 18px;
  height: 18px;
 }
`;

const IconUser = styled(User)`
 width: 24px;
 height: 24px;
 ${media.mobile} {
  width: 18px;
  height: 18px;
 }
`;

const StyledCartCircle = styled.div`
 position: relative;
`;
const StyledCircle = styled(Circle)`
 position: absolute;
 top: -13px;
 right: 0px;
`;

export {
 IconFavorites,
 StyledLink,
 StyledCartCircle,
 StyledNav,
 IconShopping,
 IconUser,
 StyledCircle,
};
