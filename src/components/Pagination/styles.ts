import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "../../assets/icons";
import { Colors } from "../../ui/colors";

export const StyledPaginationContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;
export const StyledPaginationButton = styled.button`
 border: none;
 background-color: ${Colors.WHITE};
 color: ${Colors.PRIMARY};
 font-weight: 700;
 font-size: 16px;
 line-height: 24px;
 cursor: pointer;
`;
export const StyledArrowLeft = styled(ArrowLeft)`
 margin-right: 12px;
`;
export const StyledArrowRight = styled(ArrowRight)`
 margin-left: 12px;
`;

export const Pages = styled.div`
 display: flex;
`;

export const Page = styled.button`
 width: 30px;
 height: 30px;
 padding: 3px;
 margin-left: 5px;
 margin-right: 5px;
 background-color: ${Colors.WHITE};
 border: ${Colors.WHITE};
 cursor: pointer;
`;
export const PageRight = styled.button`
 width: 30px;
 height: 30px;
 padding: 3px;
 margin-left: 5px;
 margin-right: 5px;
 background-color: ${Colors.WHITE};
 color: ${Colors.GRAY};
 border: ${Colors.WHITE};
 cursor: pointer;
`;
export const CurrentPage = styled(Page)`
 /* border: 1px solid rgb(13, 12, 29); */
`;
