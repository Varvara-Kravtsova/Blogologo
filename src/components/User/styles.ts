import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledUser = styled.form`
 margin: 0 auto 40px;
 max-width: 564px;
`;

export const Subtitle = styled.h3`
 margin-bottom: 25px;
 text-align: start;
 ${typography.H3}
`;

export const UserForm = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 width: 100%;
 margin: 0 auto;
`;

export const DataBlock = styled.div`
 width: 100%;
`;

export const DataMail = styled.div`
 width: 100%;
 margin-bottom: 20px;
`;

export const Title = styled.p`
 margin-bottom: 10px;
 ${typography.B1}
 cursor: pointer;
`;

export const Input = styled.input`
 max-width: 549px;
 width: 100%;
 margin-bottom: 40px;
 ${typography.input}
 padding: 12px 0px 12px 12px;
 border: 1px solid ${Colors.GRAY};
 &::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
 }
 ${media.mobile} {
  padding: 12px 0px 12px 5px;
 }
`;

export const Button = styled.button`
 ${typography.button}
 width: 100%;
`;

export const ErrorMassage = styled.div`
 width: 100%;
 margin: 0 auto;
 padding-top: 10px;
 padding-bottom: 10px;
 margin-bottom: 20px;
 text-align: center;
 font-weight: 400;
 font-size: 16px;
 line-height: 32px;
 background-color: #ffe4e1;
 box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const Notification = styled(ErrorMassage)`
 color: #696969;
`;
