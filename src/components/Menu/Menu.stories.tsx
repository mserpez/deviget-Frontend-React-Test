import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Menu as MenuComponent, MenuProps } from ".";

export default {
  title: "Components/Menu",
  component: MenuComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<MenuProps> = (args) => <MenuComponent {...args} />;

export const Menu = Template.bind({});
Menu.args = {};
