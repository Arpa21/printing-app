import React from "react";
import { shallow } from "enzyme";
import { PrintSummary } from "./PrintSummary";
import "../../../setupTests.js";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const printJobs = [];

jest.spyOn(React, "useState").mockImplementationOnce(() => [printJobs, {}]);

describe("<PrintSummary />", () => {
  const createComponent = () => shallow(<PrintSummary />);

  it("should render without error", () => {
    expect(createComponent).not.toThrow();
  });
});
