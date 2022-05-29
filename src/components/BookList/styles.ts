import styled from "styled-components";

const StyledBookList = styled.ul`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 grid-gap: 20px;

 width: 100%;
 max-width: 960px;

 list-style: none;

 padding: 0;
 margin: 0 auto;
`;

export { StyledBookList };
