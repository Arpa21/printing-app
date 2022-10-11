import React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";
import "../../../setupTests.js";

describe("<Button />", () => {
  let props;
  const createComponent = () => shallow(<Button {...props}>A button</Button>);

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      disabled: false,
      variant: "contained",
    };
  });

  it("should render without error", () => {
    expect(createComponent).not.toThrow();
  });

  it("should trigger a custom onClick event when Clicked", () => {
    const wrapper = createComponent();
    const button = wrapper.find("WithStyles(ForwardRef(Button))");

    button.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });
});
