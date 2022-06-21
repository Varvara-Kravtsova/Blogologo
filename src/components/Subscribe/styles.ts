import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledSubscribe = styled.section`
 max-width: 1920px;
 width: 100%;
 margin: 72px auto 72px;
 box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
 ${media.mobile} {
  margin: 0 auto 56px;
 }
`;

const Container = styled.div`
 max-width: 1120px;
 width: 100%;
 margin: 0 auto;
`;

const SubscribeBlock = styled.div`
 padding: 56px 64px;
 background: #ffe4e1;
 ${media.mobile} {
  padding: 24px;
 }
`;

const SubscribeTitle = styled.h2`
 ${typography.H2};
 color: ${Colors.PRIMARY};
 text-transform: uppercase;
`;

const SubscribeSubtitle = styled.p`
 ${typography.S1};
 color: ${Colors.SECONDARY};
 margin-bottom: 32px;
 ${media.mobile} {
  margin-bottom: 24px;
 }
`;

const SubscribeForm = styled.div`
 display: flex;
 background-color: ${Colors.WHITE};
 border-radius: 2px;
 ${media.mobile} {
  flex-direction: column;
  row-gap: 10px;
 }
`;

const SubscribeInput = styled.input`
 max-width: 845px;
 width: 100%;
 ${typography.input};
 ${media.tablet} {
  max-width: 608px;
 }
 ${media.mobile} {
  max-width: 254px;
 }
`;

const SubscribeButton = styled.button`
 ${typography.button};
 padding: 16px 40px;
 ${media.tablet} {
  max-width: 608px;
 }
 ${media.mobile} {
  width: 100%;
  padding: 16px 57px;
 }
`;

export {
 SubscribeButton,
 SubscribeInput,
 SubscribeForm,
 SubscribeSubtitle,
 SubscribeTitle,
 StyledSubscribe,
 Container,
 SubscribeBlock,
};
