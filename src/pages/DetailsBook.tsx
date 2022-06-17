import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { BookDetails } from "../components/BookDetails/BookDetails";
import Subscribe from "../components/Subscribe/Subscribe";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/bookSelectors";
import { fetchBookDetails } from "../store/slices/bookSlice";

export const DetailsBook = () => {
 const { id = "" } = useParams();
 const { result } = useAppSelector(getBooks);
 console.log(result);

 const dispatch = useAppDispatch();

 useEffect(() => {
  dispatch(fetchBookDetails(id));
 }, [id, dispatch]);

 return (
  <>
   <BackButton />
   <BookDetails book={result} />
   <Subscribe />
  </>
 );
};
