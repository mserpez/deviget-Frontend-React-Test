import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Badge } from ".";

test("Renders the component correctly", () => {
  // Render component
  render(<Badge />);

  // Find the element
  screen.getByTestId("badge");
});
