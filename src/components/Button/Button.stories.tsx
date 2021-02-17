import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button as ButtonComponent, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: "Dismiss All",
  onClick: alert,
};
