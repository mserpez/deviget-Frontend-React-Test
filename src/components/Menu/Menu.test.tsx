import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Menu } from ".";

test("Renders the component correctly", () => {
    // Render component
    render(<Menu />)

    // Find the element
    screen.getByTestId('menu-root')
});

test("Renders the component correctly with Title", () => {
    const title = "Test Title"

    // Render component
    render(<Menu title={title} />)

    // Find the element
    screen.getByTestId('menu-root')
    screen.getByTestId('title')

});