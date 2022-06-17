import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";
import { getBooks } from "../../store/selectors/bookSelectors";

import {
 CurrentPage,
 PageRight,
 Pages,
 StyledArrowLeft,
 StyledArrowRight,
 StyledPaginationButton,
 StyledPaginationContainer,
} from "./styles";

export const Pagination = () => {
 const { page = "", title = "" } = useParams();
 const navigate = useNavigate();
 const { total } = useAppSelector(getBooks);

 const handleNextPage = () => {
  navigate(`/bookstore/search/${title}/${Number(page) + 1}`);
 };
 const handlePrevPage = () => {
  if (Number(page) === 1) {
   return;
  }
  navigate(`/bookstore/search/${title}/${Number(page) - 1}`);
 };

 const handleNextButton = () => {
  navigate(`/bookstore/search/${title}/${Number(page) + 1}`);
  window.scrollTo(0, 0);
 };

 const handlePrevButton = () => {
  if (+page > 1) {
   navigate(`/bookstore/search/${title}/${Number(page) - 1}`);
   window.scrollTo(0, 0);
  }
 };

 return (
  <StyledPaginationContainer>
   <StyledPaginationButton type="button" onClick={handlePrevPage}>
    <StyledArrowLeft />
    Prev
   </StyledPaginationButton>

   <Pages>
    <PageRight onClick={handlePrevButton}>
     {+page > 1 ? +page - 1 : ""}
    </PageRight>
    <CurrentPage>{page}</CurrentPage>
    <PageRight onClick={handleNextButton}>
     {total && +page < Math.ceil(+total) / 10 ? +page + 1 : +page + 1}
    </PageRight>
   </Pages>
   <StyledPaginationButton type="button" onClick={handleNextPage}>
    Next
    <StyledArrowRight />
   </StyledPaginationButton>
  </StyledPaginationContainer>
 );
};
