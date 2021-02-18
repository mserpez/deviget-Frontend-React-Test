import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostContent } from ".";
import { SERVICES } from "../../constants";

test("Renders the component correctly", () => {
  const mockData = SERVICES.REDDIT_SERVICE.MOCK_DATA.data.children[0];
  // Render component
  render(<PostContent post={mockData} />);

  // Find the element
  screen.getByTestId("post-content");
});
