import { BookItem } from "../BookItem/BookItem";
import { StyledBookList } from "./styles";
import { IBook } from "../../types";

interface IBookList {
 books: IBook[];
}

export const BookList = ({ books }: IBookList) => {
 return (
  <StyledBookList>
   {books.map((book) => {
    return <BookItem key={book.isbn13} book={book} />;
   })}
  </StyledBookList>
 );
};
