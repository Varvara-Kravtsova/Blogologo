import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookList } from "../components/BookList/BookList";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import { Pagination } from "../components/Pagination/Pagination";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/bookSelectors";
import { fetchBooksBySearch } from "../store/slices/bookSlice";
import { ISearchBooksApi } from "../types";
import { bookApi } from "../services/bookService";
import { Subtitle } from "../components/Subtitle/Subtitle";

export const SearchBooks = () => {
 const { title = "", page = "" } = useParams();
 const { books } = useAppSelector(getBooks);
 //  const dispatch = useAppDispatch();

 const [searchResult, setSearchResult] = useState<ISearchBooksApi>();

 //  useEffect(() => {
 //   dispatch(fetchBooksBySearch({ title, page }));
 //  }, [title, dispatch, page]);

 useEffect(() => {
  bookApi.getBooksBySearch(title, page).then((books) => {
   setSearchResult(books);
  });
 }, [title, page]);

 return (
  <>
   <BackButton />
   <Title> '{title}' search results</Title>
   <Subtitle>Found {searchResult?.total} books</Subtitle>
   <BookList books={books ? books : []} />
   <Pagination />
  </>
 );
};
