import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookList } from "../components/BookList/BookList";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import { Pagination } from "../components/Pagination/Pagination";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { getBooks, getBooksStatus } from "../store/selectors/bookSelectors";
import { fetchBooksBySearch } from "../store/slices/bookSlice";
import { Subtitle } from "../components/Subtitle/Subtitle";
import Loader from "../components/Loader/Loader";

export const SearchBooks = () => {
 const { title = "", page = "" } = useParams();
 const { books, total } = useAppSelector(getBooks);
 const dispatch = useAppDispatch();

 useEffect(() => {
  dispatch(fetchBooksBySearch({ title, page }));
 }, [title, dispatch, page]);

 const status = useAppSelector(getBooksStatus);
 if (status === "loading") {
  return <Loader />;
 }
 if (status === "error") {
  return <Title>Something's wrong. Come back later</Title>;
 }

 return (
  <>
   <BackButton />
   <Title> '{title}' search results</Title>
   <Subtitle>Found {total} books</Subtitle>
   <BookList books={books ? books : []} />
   <Pagination />
  </>
 );
};
