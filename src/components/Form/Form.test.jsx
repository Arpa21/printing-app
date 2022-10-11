import React from "react";
import { shallow } from "enzyme";
import { Form } from "./Form";
import "../../../setupTests.js";

describe("<Form />", () => {
  let props;
  const createComponent = () => shallow(<Form {...props} />);

  beforeEach(() => {
    props = {
      onTitleChange: jest.fn(),
      onCopyNumberChange: jest.fn(),
      onPaperSizeChange: jest.fn(),
      onColourChange: jest.fn(),
      onSideChange: jest.fn(),
      onSubmit: jest.fn(),
      onFileChange: jest.fn(),
      onFileUpload: jest.fn(),
      paperSize: "A3",
      colour: "Colour",
      side: "Single",
    };
  });

  it("should render without error", () => {
    expect(createComponent).not.toThrow();
  });

  it("should call onFileChange when input value changes", () => {
    const wrapper = createComponent();
    const inputProps = wrapper.find("input").props();
    inputProps.onChange();

    expect(props.onFileChange).toHaveBeenCalled();
  });

  it("should call onPaperSizeChange when paper size textfield changes", () => {
    const wrapper = createComponent();
    const paperSizeField = wrapper.find("Textfield").at(2);
    paperSizeField.simulate("change");

    expect(props.onPaperSizeChange).toHaveBeenCalled();
  });
});
