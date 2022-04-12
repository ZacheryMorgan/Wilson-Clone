import React from "react";
import { render } from "@testing-library/react";
import Nav from "../components/Nav";

describe("Nav component", () => {
  it("Renders Nav component correctly", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
