import React from "react";
import { shallow } from "enzyme";
import { MenuItem } from ".";

test("Renders the component", () => {
  const component = shallow(<MenuItem />);
  expect(component).toMatchSnapshot();
});
