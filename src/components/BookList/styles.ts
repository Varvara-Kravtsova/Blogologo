import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledBookList = styled.ul`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 column-gap: 70px;
 row-gap: 70px;

 margin-bottom: 30px;
 padding-bottom: 80px;

 list-style: none;
 border-bottom: 1px solid ${Colors.GRAY};
`;
