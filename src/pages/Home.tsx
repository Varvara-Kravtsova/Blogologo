import { useEffect, useState } from "react";
import { BookList } from "../components/BookList/BookList";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../services/types";
import { getBooks } from "../store/selectors/bookSelector";
import { useAppSelector } from "../store/hooks/hooks";

export const Home = () => {
 const books = useAppSelector(getBooks);

 const [newBooks, setNewBooks] = useState<INewBooksApi>({
  books: [],
  error: "",
  total: "",
 });

 useEffect(() => {
  bookApi.getNewBooks().then((books) => {
   setNewBooks(books);
  });
 }, []);

 return (
  <>
   <BookList books={newBooks.books} />
  </>
 );
};
