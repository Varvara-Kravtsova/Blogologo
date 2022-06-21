import { ReactNode } from "react";
import { StyledSubtitle } from "./styles";

interface ISubtitle {
 children: ReactNode;
}

export const Subtitle = ({ children }: ISubtitle) => {
 return <StyledSubtitle>{children}</StyledSubtitle>;
};
