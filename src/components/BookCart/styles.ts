import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledCartList = styled.div`
 display: flex;
 flex-direction: column;
`;

const Container = styled.div`
 position: relative;
 margin-bottom: 20px;
 border-bottom: 1px solid ${Colors.GRAY};
`;

const StyledLink = styled(Link)`
 margin-right: 20px;
`;

const BookContainer = styled.div`
 display: flex;
 margin-bottom: 20px;
 ${media.mobile} {
  display: block;
 }
`;

const InfoBlock = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 width: 450px;
 margin-right: 90px;
 ${media.tablet} {
  margin-right: 0px;
 }
 ${media.mobile} {
  width: 100%;
  margin-bottom: 10px;
 }
`;

const CartImage = styled.img`
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

const CartTitle = styled.p`
 ${typography.H3};
 margin: 40px 0 20px;
 padding: 0 10px;
 ${media.mobile} {
  margin: 15px 0;
 }
`;

const CartSubtitle = styled.p`
 ${typography.B2};
 margin-bottom: 15px;
 padding: 0 10px;
`;

const CartPrice = styled.p`
 ${typography.H3};
 font-size: 30px;
 display: flex;
 justify-content: end;
 align-items: flex-end;
 margin-bottom: 40px;
 width: 155px;
 ${media.mobile} {
  margin-left: auto;
 }
`;

const RemoveContainer = styled.button`
 position: absolute;
 right: 0px;
 top: 40px;
`;

const AmountContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 120px;
 margin: auto 0 40px;
`;

const Button = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 5px;
 height: 30px;
 width: 30px;
`;

const Count = styled.p`
 ${typography.H3}
`;

const TotalContainer = styled.div`
 max-width: 300px;
 width: 100%;
 margin-left: auto;
 margin-bottom: 30px;
 margin-top: 10px;
 ${media.mobile} {
  max-width: 170px;
 }
`;

const TotalPrice = styled.p`
 ${typography.H3};
 font-size: 35px;
 padding-left: 50px;
`;

export {
 StyledCartList,
 CartPrice,
 CartTitle,
 CartImage,
 StyledLink,
 InfoBlock,
 CartSubtitle,
 Container,
 RemoveContainer,
 AmountContainer,
 Button,
 Count,
 TotalContainer,
 TotalPrice,
 BookContainer,
};
