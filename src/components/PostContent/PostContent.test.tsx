import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostContent } from ".";

const post = {
  id: "1",
  title: "Post 1",
  author: "mserpez",
  createdAt: new Date().getTime(),
  commentsQty: 1000000,
  photoURL: "",
  thumbnail: "",
};

test("Renders the component correctly", () => {
  // Render component
  render(<PostContent post={post} />);

  // Find the element
  screen.getByTestId("post-content");
});
