import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("should render", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
  test("renders react logo", () => {
    const { getByAltText } = render(<App />);

    expect(getByAltText("React logo")).toBeTruthy();
  });
});
