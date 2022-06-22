import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";
import { getBooks } from "../../store/selectors/bookSelectors";

import {
 CurrentPage,
 PageRight,
 Pages,
 StyledArrowLeft,
 StyledArrowRight,
 PaginationButton,
 StyledPaginationContainer,
} from "./styles";

export const Pagination = () => {
 const { page = "", title = "" } = useParams();
 const navigate = useNavigate();
 const { total } = useAppSelector(getBooks);

 const handleNextPage = () => {
  navigate(`/Bookstore/search/${title}/${Number(page) + 1}`);
 };

 const handlePrevPage = () => {
  if (Number(page) === 1) {
   return;
  }
  navigate(`/Bookstore/search/${title}/${Number(page) - 1}`);
 };

 const handleNextButton = () => {
  navigate(`/Bookstore/search/${title}/${Number(page) + 1}`);
  window.scrollTo(0, 0);
 };

 const handlePrevButton = () => {
  if (+page > 1) {
   navigate(`/Bookstore/search/${title}/${Number(page) - 1}`);
   window.scrollTo(0, 0);
  }
 };

 return (
  <StyledPaginationContainer>
   <PaginationButton type="button" onClick={handlePrevPage}>
    <StyledArrowLeft />
    Prev
   </PaginationButton>

   <Pages>
    <PageRight onClick={handlePrevButton}>
     {+page > 1 ? +page - 1 : ""}
    </PageRight>
    <CurrentPage>{page}</CurrentPage>
    <PageRight onClick={handleNextButton}>
     {total && +page < Math.ceil(+total) / 10 ? +page + 1 : +page + 1}
    </PageRight>
   </Pages>

   <PaginationButton type="button" onClick={handleNextPage}>
    Next
    <StyledArrowRight />
   </PaginationButton>
  </StyledPaginationContainer>
 );
};
