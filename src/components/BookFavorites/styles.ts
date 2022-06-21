import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledFavoritesList = styled.div`
 display: flex;
 flex-direction: column;
`;

const Container = styled.div`
 position: relative;
 margin-bottom: 20px;
 border-bottom: 1px solid ${Colors.GRAY};
`;

const StyledLink = styled(Link)`
 display: flex;
 margin-bottom: 20px;
 ${media.mobile} {
  display: block;
 }
`;

const InfoBlock = styled.div`
 display: flex;
 flex-direction: column;
 max-width: 450px;
 width: 100%;
`;

const FavoritesImage = styled.img`
 background: #ffe4e1;
 max-width: 260px;
 width: 100%;
 margin: 20px 65px;
 padding: 0px 40px;
 ${media.mobile} {
  margin: 0;
  max-width: none;
 }
`;

const FavoritesTitle = styled.p`
 ${typography.H3};
 margin: 40px 0 20px;
 padding: 0 10px;
 ${media.mobile} {
  margin: 15px 0;
 }
`;

const FavoritesSubtitle = styled.p`
 ${typography.B2};
 margin-bottom: 15px;
 padding: 0 10px;
`;

const FavoritesPrice = styled.p`
 ${typography.H3};
 font-size: 30px;
 align-content: flex-end;
 margin: auto 0 40px;
 padding-left: 10px;
`;

const RemoveContainer = styled.button`
 position: absolute;
 right: 40px;
 top: 95px;
 ${media.tablet} {
  right: 0;
  top: 0;
 }
`;

export {
 StyledFavoritesList,
 FavoritesPrice,
 FavoritesTitle,
 FavoritesImage,
 StyledLink,
 InfoBlock,
 FavoritesSubtitle,
 Container,
 RemoveContainer,
};
