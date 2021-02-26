import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PostContent as PostContentComponent, IPostContentProps } from ".";

export default {
  title: "Components/Post/Content",
  component: PostContentComponent,
} as Meta;

const Template: Story<IPostContentProps> = (args) => (
  <PostContentComponent {...args} />
);

export const PostContent = Template.bind({});
PostContent.args = {};
