import { IBook } from "../../types";
import { BookItem } from "../BookItem/BookItem";
import { StyledBookList } from "./styles";

interface IBookListProps {
 books: IBook[];
}

export const BookList = ({ books }: IBookListProps) => {
 return (
  <StyledBookList>
   {books.map((book) => {
    return <BookItem key={book.isbn13} book={book} />;
   })}
  </StyledBookList>
 );
};
