import styled from "styled-components";
import { Facebook, Twitter } from "../../assets/icons";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import { Link } from "react-scroll";
import { media } from "../../ui/media";

interface ITab {
 isActive: boolean;
}

const StyledBook = styled.div`
 display: flex;
 margin-bottom: 72px;
 ${media.tablet} {
  flex-direction: column;
 }
`;

const ImageContainer = styled.div`
 max-width: 544px;
 width: 100%;
 padding: 61px 0px;
 margin-right: 128px;
 position: relative;
 background-color: #ffe4e1;
 box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
 ${media.tablet} {
  max-width: 820px;
  margin-right: 0;
 }
`;

const HeardContainer = styled.button`
 position: absolute;
 right: 0;
 top: 0;
 padding: 0;
`;

const BookImage = styled.img`
 display: block;
 margin: 0 auto;
`;

const InfoContainer = styled.div`
 max-width: 448px;
 width: 100%;
 border-top: 1px solid ${Colors.GRAY};
 ${media.tablet} {
  max-width: 820px;
 }
`;

const RateContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 grid-gap: 18px;
 margin: 41px 0 24px;
`;

const BookPrice = styled.h2`
 ${typography.H2}
`;

const BookRating = styled.div`
 margin-right: 20px;
`;

const InfoList = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 column-gap: 90px;
 row-gap: 15px;
 margin-bottom: 30px;
`;

const Params = styled.p`
 ${typography.B2}
 font-weight: 400;
`;

const Attribute = styled.p`
 ${typography.B1}
 line-height: 20px;
 ${media.mobile} {
  ${media.mobile} {
   width: 190px;
   text-overflow: ellipsis;
   overflow: hidden;
  }
 }
`;

const AddButton = styled.button`
 ${typography.button}
 width: 100%;
 margin: 0 auto 20px;
`;

const DetailsButton = styled.button`
 margin-bottom: 20px;
 font-weight: 400;
 font-size: 16px;
 line-height: 24px;
 cursor: pointer;
`;

const PreviewButton = styled.a`
 display: block;
 text-align: center;
 font-weight: 400;
 font-size: 16px;
 line-height: 24px;
 color: ${Colors.PRIMARY};
 cursor: pointer;
`;

const StyledDownButton = styled.div`
 margin-left: 5px;
`;

const StyledLink = styled(Link)`
 display: flex;
 align-items: center;
 text-decoration: none;
 color: ${Colors.PRIMARY};
`;

const TabsContainer = styled.div`
 display: grid;
 column-gap: 20px;
 grid-template-columns: repeat(2, 160px);
 width: 100%;
 margin-bottom: 48px;
 border-bottom: 1px solid ${Colors.GRAY};
 ${media.mobile} {
  grid-template-columns: repeat(2, 100px);
  column-gap: 10px;
 }
`;

const Tab = styled.button<ITab>`
 ${typography.tab}
 padding: 0 40px 20px;
 ${media.mobile} {
  padding: 10px;
 }
`;

const Description = styled.div`
 margin-bottom: 50px;
`;

const DetailsList = styled.div`
 display: grid;
 grid-template-columns: 150px 150px;
 column-gap: 90px;
 row-gap: 15px;
 margin-bottom: 30px;
 ${media.mobile} {
  column-gap: 0;
 }
`;

const Container = styled.div`
 max-width: 1120px;
 width: 100%;
 margin: 0 auto;
 padding: 0 16px;
 ${media.tablet} {
  max-width: 688px;
 }
`;

const TabsPanel = styled.div`
 min-height: 70px;
 ${typography.B1}
 color: ${Colors.PRIMARY};
 margin-bottom: 48px;
 ${media.mobile} {
  min-height: 193px;
 }
`;

const Icons = styled.div`
 display: grid;
 align-items: center;
 grid-template-columns: repeat(2, 30px);
 gap: 10px;
 margin-bottom: 20px;
`;

const IconsItem = styled.a`
 margin: 0 auto;
 padding: 10px;
`;

const IconFacebook = styled(Facebook)``;
const IconTwitter = styled(Twitter)``;

export {
 StyledBook,
 ImageContainer,
 InfoContainer,
 BookImage,
 RateContainer,
 BookPrice,
 BookRating,
 InfoList,
 Params,
 Attribute,
 AddButton,
 DetailsButton,
 StyledDownButton,
 StyledLink,
 TabsContainer,
 Tab,
 Description,
 DetailsList,
 Container,
 PreviewButton,
 TabsPanel,
 IconTwitter,
 IconFacebook,
 IconsItem,
 Icons,
};
