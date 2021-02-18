import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostItem } from ".";
import { DEFAULT_POST_URL } from "../PostImage";

const postItemProps = {
  title: "Post 1",
  author: "mserpez",
  createdDate: new Date().getTime(),
  numComments: 1000000,
  read: false,
}

test("Renders the component correctly", () => {
  // Render component
  render(
    <PostItem
      {...postItemProps}
    />
  );

  // Find the element
  screen.getByTestId("post-item");
});

test("Renders the component correctly with default props", () => {
  // Render component
  render(
    <PostItem
      {...postItemProps}
    />
  );

  // Check img default prop
  const elementImg = screen.getByTestId("post-image");

  expect(elementImg).toHaveProperty("src", DEFAULT_POST_URL)
});

test("Renders badge when post is not read", () => {
  // Render component
  render(
    <PostItem
      {...postItemProps}
      read={true}
    />
  );

  // Check img default prop
  const elementBadge = screen.getByTestId("badge");

  expect(elementBadge).toBeInTheDocument()
});



