import { useEffect } from "react";
import { BookList } from "../components/BookList/BookList";
import Subscribe from "../components/Subscribe/Subscribe";
import { Title } from "../components/Title/Title";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/bookSelectors";
import { fetchBooks } from "../store/slices/bookSlice";

export const Home = () => {
 const dispatch = useAppDispatch();
 const { books } = useAppSelector(getBooks);

 useEffect(() => {
  dispatch(fetchBooks());
 }, [dispatch]);

 return (
  <>
   <Title>NEW RELEASES BOOKS</Title>
   <BookList books={books}></BookList>
   <Subscribe />
  </>
 );
};
