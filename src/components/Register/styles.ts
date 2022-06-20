import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledRegister = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 margin: 0 auto;
 margin-bottom: 200px;
 max-width: 544px;
 width: 100%;
 border: 1px solid ${Colors.GRAY};
`;

const TabBlock = styled.div`
 max-width: 544px;
 width: 100%;
 border-bottom: 1px solid ${Colors.GRAY};
`;

const Tabs = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`;

const TabIn = styled(Link)`
 width: 239px;
 padding: 24px 0;
 font-weight: 700;
 font-size: 24px;
 line-height: 24px;
 text-transform: uppercase;
 text-align: center;
 color: ${Colors.SECONDARY};
`;

const TabUp = styled(Link)`
 width: 239px;
 padding: 24px 0;
 font-weight: 700;
 font-size: 24px;
 line-height: 24px;
 text-transform: uppercase;
 text-align: center;
 color: ${Colors.SECONDARY};
 border-bottom: 1px solid ${Colors.PRIMARY};
`;

const RegisterForm = styled.form`
 padding: 40px 32px;
 width: 100%;
`;

const RegisterBlock = styled.div`
 margin-bottom: 20px;
 width: 100%;
`;

const RegisterPassword = styled.div`
 margin-bottom: 60px;
 width: 100%;
`;

const Title = styled.p`
 margin-bottom: 5px;
 font-weight: 700;
 font-size: 16px;
 line-height: 32px;
 cursor: pointer;
`;

const RegisterInput = styled.input`
 max-width: 480px;
 width: 100%;
 padding: 14px 0 10px 20px;
 border: 1px solid ${Colors.GRAY};
`;

const RegisterButton = styled.button`
 ${typography.button}
 max-width: 480px;
 width: 100%;
`;

const ErrorMassage = styled.div`
 margin-bottom: 20px;
 width: 100%;
 text-align: center;
 padding-top: 5px;
 padding-bottom: 5px;
 background-color: #ffe4e1;
 ${typography.B1}
 color: #696969;
 box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export {
 StyledRegister,
 TabBlock,
 Tabs,
 TabIn,
 TabUp,
 RegisterForm,
 RegisterBlock,
 Title,
 RegisterInput,
 RegisterButton,
 RegisterPassword,
 ErrorMassage,
};
