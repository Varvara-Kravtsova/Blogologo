import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { removeFavorite } from "../../store/slices/userSlice";
import { IBook } from "../../types";
import { HeartRemove } from "../HeartRemove/HeartRemove";
import {
 Container,
 InfoBlock,
 FavoritesImage,
 FavoritesPrice,
 FavoritesSubtitle,
 FavoritesTitle,
 RemoveContainer,
 StyledFavoritesList,
 StyledLink,
} from "./styles";

export const BookFavorites = () => {
 const { favorites } = useAppSelector(getUserInfo);

 const dispatch = useAppDispatch();

 const handleRemoveFavorite = (book: IBook) => {
  dispatch(removeFavorite(book));
 };

 return (
  <StyledFavoritesList>
   {favorites.map((book) => {
    return (
     <Container key={book.isbn13}>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
       <FavoritesImage src={book.image} alt={book.title} />
       <InfoBlock>
        <FavoritesTitle>{book.title}</FavoritesTitle>
        <FavoritesSubtitle>{book.subtitle}</FavoritesSubtitle>
        <FavoritesPrice>
         {book.price === "$0.00" ? "Not Available" : book.price}
        </FavoritesPrice>
       </InfoBlock>
      </StyledLink>

      <RemoveContainer type="button" onClick={() => handleRemoveFavorite(book)}>
       <HeartRemove />
      </RemoveContainer>
     </Container>
    );
   })}
  </StyledFavoritesList>
 );
};
