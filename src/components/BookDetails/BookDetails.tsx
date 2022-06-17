import { ReactNode, useEffect, useState } from "react";
import { FullStar, EmptyStar, ArrowDown } from "../../assets/icons";
import { v4 as uuidv4 } from "uuid";
import {
 StyledBook,
 ImageContainer,
 BookImage,
 InfoContainer,
 RateContainer,
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
 TabsContainer,
 Description,
 PreviewButton,
 TabsPanel,
 IconFacebook,
 Icons,
 IconsItem,
 IconTwitter,
} from "./styles";
import { IBookDetailsApi } from "../../types";

interface IProps {
 book: IBookDetailsApi;
}

export const BookDetails = ({ book }: IProps) => {
 useEffect(() => {
  window.scrollTo(0, 0);
 });

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
    <ImageContainer>
     <BookImage src={book.image} alt={book.title} />
    </ImageContainer>

    <InfoContainer>
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
      <StyledLink to="details" duration={1000} smooth={true}>
       More detailse
       <StyledDownButton>
        <ArrowDown />
       </StyledDownButton>
      </StyledLink>
     </DetailsButton>
     <AddButton type="button">Add to cart</AddButton>
     {previews.map((preview) => (
      <PreviewButton href={preview} key={book.isbn13}>
       Preview book
      </PreviewButton>
     ))}
    </InfoContainer>
   </StyledBook>

   <TabsContainer>
    <Tab isActive={active === "description"} onClick={handleDescription}>
     Description
    </Tab>
    <Tab isActive={active === "authors"} onClick={handleAuthors}>
     Authors
    </Tab>
   </TabsContainer>
   <TabsPanel>
    {active === "description" ? (
     <Description>{book.desc}</Description>
    ) : active === "authors" ? (
     <Description>{book.authors}</Description>
    ) : (
     "Not Found"
    )}
   </TabsPanel>

   <Icons>
    <IconsItem href="https://facebook.com">
     <IconFacebook id="facebook" />
    </IconsItem>
    <IconsItem href="https://twitter.com">
     <IconTwitter id="twitter" />
    </IconsItem>
   </Icons>
  </>
 );
};
