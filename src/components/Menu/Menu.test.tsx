import React from "react";
import { shallow } from "enzyme";
import { Menu } from ".";

test("Renders the component", () => {
  const component = shallow(<Menu />);
  expect(component).toMatchSnapshot();
});
