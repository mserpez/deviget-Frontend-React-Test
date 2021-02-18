import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostImageModal } from ".";

test("Renders the component correctly", async () => {
  // Render component
  render(<PostImageModal />);

  screen.getByTestId("post-image-modal");
});
