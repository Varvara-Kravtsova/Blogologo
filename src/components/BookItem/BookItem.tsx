import { IBook } from "../../types/";
import {
 StyledImage,
 StyledLink,
 StyledPrice,
 StyledSubtitle,
 StyledTitle,
 StyledBookItem,
} from "./styles";

interface IBookItemProps {
 book: IBook;
}
export const BookItem = ({ book }: IBookItemProps) => {
 return (
  <StyledBookItem key={book.isbn13}>
   <StyledLink to={`/bookstore/books/${book.isbn13}`}>
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
