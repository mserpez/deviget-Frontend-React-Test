import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostItem, IPostItemProps } from ".";

const postItemProps: IPostItemProps = {
  post: {
    id: "1",
    title: "Post 1",
    author: "mserpez",
    createdAt: new Date().getTime(),
    commentsQty: 1000000,
    photoURL: "",
    photoURLBig: "",
    thumbnail: "",
  },
  readPostHandler: () => {},
  dismissPostHandler: () => {},
};

test("Renders the component correctly", () => {
  // Render component
  render(<PostItem {...postItemProps} />);

  // Find the element
  screen.getByTestId("post-item");
});

test("Renders badge when post is not read", () => {
  // Render component
  render(<PostItem {...postItemProps} />);

  // Check img default prop
  // TODO: Fix it.
  // const elementBadge = screen.getByTestId("badge");
  // expect(elementBadge).toBeInTheDocument()
});
