import React from "react";
import MuiButton from "@material-ui/core/Button";
import { ButtonWrapper } from "./Button.style";

export const Button = ({ children, onClick, disabled, variant }) => {
  return (
    <ButtonWrapper>
      <MuiButton onClick={onClick} variant={variant} disabled={disabled}>
        {children}
      </MuiButton>
    </ButtonWrapper>
  );
};
