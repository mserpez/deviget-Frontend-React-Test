import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Title as TitleComponent, TitleProps } from "./";

export default {
  title: "Components/Title",
  component: TitleComponent,
} as Meta;

const Template: Story<TitleProps> = (args) => (
  <div style={{ backgroundColor: "#DADADA" }}>
    <TitleComponent {...args} />
  </div>
);

export const Title = Template.bind({});
Title.args = {
  label: "Title",
  inverted: true
};
