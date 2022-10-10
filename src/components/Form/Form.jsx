import React from "react";

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
    <div>
      <input placeholder="Title..." onChange={onTitleChange} />
      <input
        type="number"
        placeholder="Number of copies..."
        onChange={onCopyNumberChange}
      />
      <select value={paperSize} onChange={onPaperSizeChange}>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
        <option value="Letter">Letter</option>
      </select>
      <select value={colour} onChange={onColourChange}>
        <option value="Colour">Colour</option>
        <option value="Black And White">Black and White</option>
      </select>
      <select value={side} onChange={onSideChange}>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
      </select>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload File</button>
      <button onClick={onSubmit} disabled={disabled}>
        Print
      </button>
    </div>
  );
};
