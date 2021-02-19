import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Text, TextFontColor, TextFontSize } from ".";

test("Renders the component correctly", () => {
  const label = "Test Label";

  // Render component
  render(<Text label={label} />);

  // Check rendered result of label prop
  expect(screen.getByRole("heading")).toHaveTextContent(label);
});

test("Renders the component correctly with default values", () => {
  const label = "Test Label";

  // Render component
  render(<Text label={label} />);

  // Find the element
  const element = screen.getByRole("heading");

  // Check rendered result of label prop
  expect(element).toHaveStyle("font-size: 16px");
  expect(element).toHaveStyle("color: #FAFAFA");
  expect(element).toHaveStyle("font-weight: 500");
});

test("Renders the component correctly overriding color", () => {
  const label = "Test Label";

  // Render component
  render(<Text label={label} fontColor={TextFontColor.orange} />);

  // Find the element
  const element = screen.getByRole("heading");

  // Check rendered result of label prop
  expect(element).toHaveStyle(`color: ${TextFontColor.orange}`);
});

test("Renders the component correctly overriding font size", () => {
  const label = "Test Label";

  // Render component
  render(<Text label={label} fontSize={TextFontSize.xl} />);

  // Find the element
  const element = screen.getByRole("heading");

  // Check rendered result of label prop
  expect(element).toHaveStyle(`font-size: ${TextFontSize.xl}`);
});

test("Renders the component correctly overriding font weight", () => {
  const label = "Test Label";

  // Render component
  render(<Text label={label} fontWeight={300} />);

  // Find the element
  const element = screen.getByRole("heading");

  // Check rendered result of label prop
  expect(element).toHaveStyle("font-weight: 300");
});
