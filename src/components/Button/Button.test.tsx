import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Button } from ".";

test("Renders the component correctly", async () => {
  const label = "Btn";
  let val = 1;
  // Render component
  render(<Button label={label} onClick={() => (val = 2)} />);

  // Find the element
  const btn = screen.getByTestId("button");
  expect(btn).toHaveTextContent(label);

  // Checking for click action
  expect(val).toBe(1);
  await waitFor(() => fireEvent.click(btn));
  expect(val).toBe(2);
});
