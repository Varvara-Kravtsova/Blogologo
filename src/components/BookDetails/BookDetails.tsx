import { ReactNode, useEffect, useState } from "react";
import { FullStar, EmptyStar, ArrowDown } from "../../assets/icons";
import { v4 as uuidv4 } from "uuid";
import { Element } from "react-scroll";
import { IBook, IBookDetailsApi } from "../../types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addFavorites } from "../../store/slices/userSlice";
import { Heart } from "../Heart/Heart";
import { addCart } from "../../store/slices/cartSlice";
import {
 StyledBook,
 ImageBlock,
 BookImage,
 InfoBlock,
 BookPrice,
 BookRating,
 InfoList,
 Params,
 Attribute,
 AddButton,
 DetailsButton,
 StyledDownButton,
 StyledLink,
 Tab,
 TabsBlock,
 Description,
 PreviewButton,
 TabsPanel,
 IconFacebook,
 IconsBlock,
 IconsItem,
 IconTwitter,
 HeartContainer,
 RateContainer,
 DetailsList,
} from "./styles";

interface IProps {
 book: IBookDetailsApi;
}

export const BookDetails = ({ book }: IProps) => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const previews = book.pdf ? Object.values(book.pdf) : [];

 const drawRating = (rating: string): ReactNode[] => {
  const stars = [];
  let id = {};
  for (let i = 0; i <= 4; i++) {
   id = uuidv4();
   if (i < +rating) {
    stars.push(<FullStar key={`${id}`} />);
   } else {
    stars.push(<EmptyStar key={`${id}`} />);
   }
  }
  return stars;
 };

 const dispatch = useAppDispatch();

 const handleFavorites = (book: IBook) => {
  dispatch(addFavorites(book));
 };

 const handleCart = (book: IBookDetailsApi) => {
  dispatch(addCart({ ...book, amount: 1 }));
 };

 const [active, setActive] = useState<string>("description");

 const handleDescription = () => {
  setActive("description");
 };

 const handleAuthors = () => {
  setActive("authors");
 };

 return (
  <>
   <StyledBook key={book.isbn13}>
    <ImageBlock>
     <HeartContainer type="button" onClick={() => handleFavorites(book)}>
      <Heart />
     </HeartContainer>
     <BookImage src={book.image} alt={book.title} />
    </ImageBlock>

    <InfoBlock>
     <RateContainer>
      <BookPrice>
       {book.price === "$0.00" ? "Not Available" : book.price}
      </BookPrice>
      <BookRating>{drawRating(`${book.rating}`)}</BookRating>
     </RateContainer>

     <InfoList>
      <Params>Authors</Params>
      <Attribute>{book.authors}</Attribute>
      <Params>Publisher</Params>
      <Attribute>{book.publisher}</Attribute>
      <Params>Language</Params>
      <Attribute>{book.language}</Attribute>
      <Params>Pages</Params>
      <Attribute>{book.pages}</Attribute>
      <Params>Year</Params>
      <Attribute>{book.year}</Attribute>
     </InfoList>

     <DetailsButton>
      <StyledLink to="details" duration={800} smooth={true}>
       More detailse
       <StyledDownButton>
        <ArrowDown />
       </StyledDownButton>
      </StyledLink>
     </DetailsButton>
     <AddButton type="button" onClick={() => handleCart(book)}>
      Add to cart
     </AddButton>
     {previews.map((preview) => (
      <PreviewButton href={preview} key={book.isbn13}>
       Preview book
      </PreviewButton>
     ))}
    </InfoBlock>
   </StyledBook>

   <Element name="details">
    <TabsBlock>
     <Tab isActive={active === "description"} onClick={handleDescription}>
      Description
     </Tab>
     <Tab isActive={active === "authors"} onClick={handleAuthors}>
      Authors
     </Tab>
    </TabsBlock>
    <TabsPanel>
     {active === "description" ? (
      <Description>{book.desc}</Description>
     ) : active === "authors" ? (
      <Description>{book.authors}</Description>
     ) : (
      "Not Found"
     )}
    </TabsPanel>

    <IconsBlock>
     <IconsItem href="https://facebook.com">
      <IconFacebook id="facebook" />
     </IconsItem>
     <IconsItem href="https://twitter.com">
      <IconTwitter id="twitter" />
     </IconsItem>
    </IconsBlock>

    <DetailsList>
     <Params>Authors</Params>
     <Attribute>{book.authors}</Attribute>
     <Params>Publisher</Params>
     <Attribute>{book.publisher}</Attribute>
     <Params>Language</Params>
     <Attribute>{book.language}</Attribute>
     <Params>Pages</Params>
     <Attribute>{book.pages}</Attribute>
     <Params>Year</Params>
     <Attribute>{book.year}</Attribute>
     <Params>ISBN 10</Params>
     <Attribute>{book.isbn10}</Attribute>
     <Params>ISBN 13</Params>
     <Attribute>{book.isbn13}</Attribute>
     <Params>URL </Params>
     <Attribute>{book.url}</Attribute>
    </DetailsList>
   </Element>
  </>
 );
};
