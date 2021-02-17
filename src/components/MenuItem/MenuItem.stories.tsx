import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { MenuItem as MenuItemComponent, MenuItemProps } from ".";

export default {
  title: "Components/Menu/Menu Item",
  component: MenuItemComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<MenuItemProps> = (args) => <MenuItemComponent {...args} />;

export const MenuItem = Template.bind({});
MenuItem.args = {};
