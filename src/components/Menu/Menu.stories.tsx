import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Menu as MenuComponent, MenuProps } from ".";
import { MenuItem } from "../MenuItem";

export default {
  title: "Components/Menu",
  component: MenuComponent,
} as Meta;

const Template: Story<MenuProps> = (args) => <MenuComponent {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  title: "Test",
  button: {
    label: "Dismiss All",
    onClick: alert,
  },
  content: <MenuItem />,
};
