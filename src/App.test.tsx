import { fireEvent, render } from "@testing-library/react";
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
  test("renders counter", () => {
    const { getByLabelText } = render(<App />);

    expect(getByLabelText("increment button")).toBeTruthy();
  });
  test("increments counter", () => {
    const { getByLabelText, getByText } = render(<App />);
    fireEvent.click(getByLabelText("increment button"));
    expect(getByText("count is 1")).toBeTruthy();
  });
});
