import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostImage } from ".";

test("Renders the component correctly", async () => {
  // Render component
  render(<PostImage />);

  // Find the element
  await screen.findByRole("img");
});
