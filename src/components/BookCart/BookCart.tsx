import { useState, useEffect } from "react";
import { Delete, Minus, Plus } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getCartInfo } from "../../store/selectors/cartSelectors";
import { IBookCartApi } from "../../types";
import {
 decreaseAmount,
 increaseAmount,
 removeCart,
} from "../../store/slices/cartSlice";
import {
 StyledCartList,
 Container,
 StyledLink,
 CartImage,
 InfoBlock,
 BookContainer,
 Button,
 Count,
 CartPrice,
 CartSubtitle,
 CartTitle,
 AmountContainer,
 RemoveContainer,
 TotalContainer,
 TotalPrice,
} from "./styles";

export const BookCart = () => {
 const { cart } = useAppSelector(getCartInfo);

 const dispatch = useAppDispatch();
 const handleRemoveCart = (book: any) => {
  dispatch(removeCart(book));
 };

 const handlePlus = (book: IBookCartApi) => {
  dispatch(increaseAmount(book));
 };

 const handleMinus = (book: IBookCartApi) => {
  if (book.amount > 1) {
   dispatch(decreaseAmount(book));
  }
 };

 const [total, setTotal] = useState(0.0);

 useEffect(() => {
  let totalAmount = 0.0;
  cart.forEach((book: { amount: string | number; price: string }) => {
   totalAmount += Number(+book.amount) * +book.price.slice(1);
  });
  setTotal(totalAmount);
 }, [cart]);

 return (
  <>
   <StyledCartList>
    {cart.map((book: IBookCartApi) => {
     return (
      <Container key={book.isbn13}>
       <BookContainer>
        <StyledLink to={`/bookstore/books/${book.isbn13}`}>
         <CartImage src={book.image} alt={book.title} />
        </StyledLink>
        <InfoBlock>
         <CartTitle>{book.title}</CartTitle>
         <CartSubtitle>
          {book.publisher} {book.year}
         </CartSubtitle>
         <AmountContainer>
          <Button>
           <Minus onClick={() => handleMinus(book)} />
          </Button>
          <Count>{book.amount}</Count>
          <Button>
           <Plus onClick={() => handlePlus(book)} />
          </Button>
         </AmountContainer>
        </InfoBlock>
        <CartPrice>
         {book.price === "$0.00"
          ? "Not Available"
          : `${(Number(book.price.slice(1)) * book.amount).toFixed(2)} $`}
        </CartPrice>
       </BookContainer>
       <RemoveContainer type="button" onClick={() => handleRemoveCart(book)}>
        <Delete />
       </RemoveContainer>
      </Container>
     );
    })}
   </StyledCartList>
   <TotalContainer>
    <TotalPrice>TOTAL: ${+total.toFixed(2)} </TotalPrice>
   </TotalContainer>
  </>
 );
};
