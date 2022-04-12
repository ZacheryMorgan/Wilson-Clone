import React from "react";
import { render } from "@testing-library/react";
import MainHeader from "../components/Main/MainHeader";

describe("MainHeader component", () => {
  it("MainHeader component renders correctly", () => {
    const { container } = render(<MainHeader />);
    expect(container).toMatchSnapshot();
  });
});
