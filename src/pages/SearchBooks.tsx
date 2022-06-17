import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookList } from "../components/BookList/BookList";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import { Pagination } from "../components/Pagination/Pagination";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/bookSelectors";
import { fetchBooksBySearch } from "../store/slices/bookSlice";

export const SearchBooks = () => {
 const { title = "", page = "" } = useParams();
 const { books } = useAppSelector(getBooks);
 const dispatch = useAppDispatch();

 useEffect(() => {
  dispatch(fetchBooksBySearch({ title, page }));
 }, [title, dispatch, page]);

 return (
  <>
   <BackButton />
   <Title> '{title}' SEARCH RESULTS</Title>
   <BookList books={books ? books : []} />
   <Pagination />
  </>
 );
};
