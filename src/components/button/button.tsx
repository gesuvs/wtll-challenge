import { ReactNode } from "react";
import { ButtonStyled } from "./button.style";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};
