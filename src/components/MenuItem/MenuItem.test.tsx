import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MenuItem } from ".";

test("Renders the component correctly", () => {
  // Render component
  render(<MenuItem />);

  // Find the element
  screen.getByTestId("menu-item");
});
