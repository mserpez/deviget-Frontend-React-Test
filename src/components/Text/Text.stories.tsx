import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text as TextComponent, TextProps } from ".";

export default {
  title: "Components/Text",
  component: TextComponent,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <div style={{ backgroundColor: "#333333" }}>
    <TextComponent {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = {
  label: "Text",
};
