import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostContent } from ".";

test("Renders the component correctly", () => {
  // Render component
  render(<PostContent />);

  // Find the element
  screen.getByTestId("post-content");
});
