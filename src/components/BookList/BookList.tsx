import { IBook } from "../../types";
import { BookItem } from "../BookItem/BookItem";
import { StyledBookList } from "./styles";

import { useEffect, useState } from "react";

export const App = () => {
 const [books, setBooks] = useState<IBook[]>([]);

 useEffect(() => {
  fetch("https://api.itbook.store/1.0/new")
   .then((res) => res.json())
   .then((data) => {
    setBooks(data.books);
   });
 }, []);

 return (
  <div>
   <h1>Books</h1>
   <BookList books={books} />
  </div>
 );
};

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
