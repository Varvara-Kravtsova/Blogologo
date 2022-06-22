import { IBook } from "../../types/";
import {
 StyledImage,
 StyledLink,
 StyledPrice,
 StyledSubtitle,
 StyledTitle,
 StyledBookItem,
} from "./styles";

interface IBookItem {
 book: IBook;
}
export const BookItem = ({ book }: IBookItem) => {
 return (
  <StyledBookItem key={book.isbn13}>
   <StyledLink to={`/Bookstore/books/${book.isbn13}`}>
    <StyledImage src={book.image} alt={book.title} />
    <StyledTitle>{book.title ? book.title : "No title"}</StyledTitle>
    <StyledSubtitle>
     {book.subtitle ? book.subtitle : "No subtitle"}
    </StyledSubtitle>
    <StyledPrice>{book.price === "$0.00" ? "Free" : book.price}</StyledPrice>
   </StyledLink>
  </StyledBookItem>
 );
};
