import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ImageModal } from ".";

test("Renders the component correctly", () => {
  // Render component
  render(<ImageModal url={""} alt={""} close={() => null} />);

  // Find the element
  screen.getByTestId("image-modal");
});
