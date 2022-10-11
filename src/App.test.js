/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import "../setupTests.js";

describe("<App />", () => {
  const createComponent = () => shallow(<App />);

  it("should render without error", () => {
    expect(createComponent).not.toThrow();
  });
});
