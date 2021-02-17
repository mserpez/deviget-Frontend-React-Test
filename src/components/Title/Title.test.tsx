import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Title } from "./";

test("Renders the component correctly", () => {
  const label = "Test Label"

  // Render component
  render(<Title label={label} />)

  // Find the element
  screen.getByTestId('title')

  // Check rendered result of label prop
  expect(screen.getByRole('heading')).toHaveTextContent(label)

});
