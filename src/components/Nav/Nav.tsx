import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getCartInfo } from "../../store/selectors/cartSelectors";
import { getUserInfo } from "../../store/selectors/userSelectors";
import {
 IconFavorites,
 IconShopping,
 IconUser,
 StyledCircle,
 StyledCartCircle,
 StyledLink,
 StyledNav,
} from "./styles";

export const Nav = () => {
 const { favorites } = useAppSelector(getUserInfo);
 const { cards } = useAppSelector(getCartInfo);
 return (
  <StyledNav>
   <StyledLink to={routes.FAVORITES}>
    <IconFavorites />
    {favorites.length !== 0 ? (
     <StyledCartCircle>
      <StyledCircle />
     </StyledCartCircle>
    ) : (
     <></>
    )}
   </StyledLink>

   <StyledLink to={routes.CART}>
    <IconShopping />
    {cards.length !== 0 ? (
     <StyledCartCircle>
      <StyledCircle />
     </StyledCartCircle>
    ) : (
     <></>
    )}
   </StyledLink>

   <StyledLink to={routes.ACCOUNT}>
    <IconUser />
   </StyledLink>
  </StyledNav>
 );
};
