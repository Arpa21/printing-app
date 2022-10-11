import React from "react";
import { Textfield } from "../Textfield";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "../Button";
import {
  FormWrapper,
  ContentWrapper,
  UploadFileWrapper,
  PrintButton,
} from "./Form.style";

export const Form = ({
  onTitleChange,
  onCopyNumberChange,
  onPaperSizeChange,
  onColourChange,
  onSideChange,
  onSubmit,
  onFileChange,
  onFileUpload,
  paperSize,
  colour,
  side,
  disabled,
}) => {
  return (
    <FormWrapper>
      <ContentWrapper>
        <Textfield
          placeholder="Title..."
          onChange={onTitleChange}
          label="Title"
        />
        <Textfield
          type="number"
          label="Number of Copies"
          placeholder="Number of copies..."
          onChange={onCopyNumberChange}
        />
        <Textfield
          select
          label="Paper Size"
          value={paperSize}
          onChange={onPaperSizeChange}
        >
          <MenuItem value="A3">A3</MenuItem>
          <MenuItem value="A4">A4</MenuItem>
          <MenuItem value="Letter">Letter</MenuItem>
        </Textfield>
        <Textfield
          select
          label="Colour"
          value={colour}
          onChange={onColourChange}
        >
          <MenuItem value="Colour">Colour</MenuItem>
          <MenuItem value="Black And White">Black And White</MenuItem>
        </Textfield>
        <Textfield select label="Side" value={side} onChange={onSideChange}>
          <MenuItem value="Single">Single</MenuItem>
          <MenuItem value="Double">Double</MenuItem>
        </Textfield>
      </ContentWrapper>
      <UploadFileWrapper>
        <input type="file" onChange={onFileChange} />
        <Button variant="outlined" onClick={onFileUpload}>
          Upload
        </Button>
      </UploadFileWrapper>
      <PrintButton>
        <Button onClick={onSubmit} variant="contained" disabled={disabled}>
          Print
        </Button>
      </PrintButton>
    </FormWrapper>
  );
};
