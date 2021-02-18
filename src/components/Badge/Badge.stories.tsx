import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Badge as BadgeComponent, BadgeProps } from ".";

export default {
  title: "Components/Post/Content",
  component: BadgeComponent,
} as Meta;

const Template: Story<BadgeProps> = (args) => <BadgeComponent {...args} />;

export const Badge = Template.bind({});
Badge.args = {};
