import { IBook } from "../../types";
import { StyledBookItem } from "./styles";

interface IBookItemProps {
 book: IBook;
}

export const BookItem = ({ book }: IBookItemProps) => {
 return (
  <StyledBookItem whileHover={{ y: 10 }}>
   <img src={book.image} alt={book.title} />
   <h2>{book.title}</h2>
   <p>{book.isbn13}</p>
   <p> {book.subtitle}</p>
   <p>{book.price}</p>
  </StyledBookItem>
 );
};
