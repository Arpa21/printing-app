import React from "react";
import { shallow } from "enzyme";
import { Textfield } from "./Textfield";
import "../../../setupTests.js";

describe("<Textfield />", () => {
  let props;
  const createComponent = () =>
    shallow(<Textfield {...props}>A text</Textfield>);

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      select: false,
      label: "A label",
      placeholder: "A placeholder",
    };
  });

  it("should render without error", () => {
    expect(createComponent).not.toThrow();
  });

  it("should trigger a custom onChange function when the textfield value changes", () => {
    const customOnChange = jest.fn();
    props.onChange = customOnChange;
    const wrapper = createComponent();
    const muiTextField = wrapper.find("WithStyles(ForwardRef(TextField))");
    muiTextField.simulate("change");

    expect(customOnChange).toHaveBeenCalled();
  });

  it("renders Child elements", () => {
    const wrapper = createComponent();
    const muiTextFieldProps = wrapper
      .find("WithStyles(ForwardRef(TextField))")
      .props();

    expect(muiTextFieldProps.children).toEqual("A text");
  });
});
