import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { TextFieldWrapper } from "./Textfield.style";

export const Textfield = ({
  onChange,
  label,
  placeholder,
  type,
  select,
  children,
}) => {
  return (
    <TextFieldWrapper>
      <MuiTextField
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        select={select}
        fullWidth
      >
        {children}
      </MuiTextField>
    </TextFieldWrapper>
  );
};
