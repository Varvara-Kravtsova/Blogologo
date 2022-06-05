import { INewBookApi } from "../../services/types";
import { StyledLink, StyledBookItem } from "./styles";

interface IBookItem {
 book: INewBookApi;
}

export const BookItem = ({ book }: IBookItem) => {
 return (
  <StyledBookItem whileHover={{ y: 10 }}>
   <StyledLink to={`/bookstore/books/${book.isbn13}`}>
    <img src={book.image} alt={book.title} />
    <h2>{book.title}</h2>
    <p> {book.subtitle}</p>
    <p>{book.price === "$0.00" ? "Free for you" : book.price}</p>
   </StyledLink>
  </StyledBookItem>
 );
};
