/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";
import "../../../setupTests.js";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const fileUpload = null;
const title = "";
const copyNumber = 0;
const paperSize = "A4";
const colour = "Black And White";
let side = "Double";

jest
  .spyOn(React, "useState")
  .mockImplementationOnce(() => [fileUpload, {}])
  .mockImplementationOnce(() => [title, {}])
  .mockImplementationOnce(() => [copyNumber, {}])
  .mockImplementationOnce(() => [paperSize, {}])
  .mockImplementationOnce(() => [colour, {}])
  .mockImplementationOnce(() => [side, {}]);

const createComponent = () => shallow(<Home />);

describe("<Home />", () => {
  it("should render without error", () => {
    expect(createComponent).not.toThrow();
  });
});
