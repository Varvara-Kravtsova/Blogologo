import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { removeFavorite } from "../../store/slices/userSlice";
import { IBook } from "../../types";
// import { HeartRemove } from "../HeartRemove/HeartRemove";
import {
 Container,
 InfoContainer,
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

 //  const handleRemoveFavorite = (book: IBook) => {
 //   dispatch(removeFavorite(book));
 //  };

 return (
  <StyledFavoritesList>
   {favorites.map((book) => {
    return (
     <Container key={book.isbn13}>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
       <FavoritesImage src={book.image} alt={book.title} />
       <InfoContainer>
        <FavoritesTitle>{book.title}</FavoritesTitle>
        <FavoritesSubtitle>{book.subtitle}</FavoritesSubtitle>
        <FavoritesPrice>
         {book.price === "$0.00" ? "Not Available" : book.price}
        </FavoritesPrice>
       </InfoContainer>
      </StyledLink>
      {/* <RemoveContainer type="button" onClick={() => handleRemoveFavorite(book)}>
       <HeartRemove />
      </RemoveContainer> */}
     </Container>
    );
   })}
  </StyledFavoritesList>
 );
};
