import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PostItem as PostItemComponent, PostItemProps } from ".";

export default {
  title: "Components/Post/Item",
  component: PostItemComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostItemProps> = (args) => (
  <PostItemComponent {...args} />
);

export const PostItem = Template.bind({});
PostItem.args = {
  author: "Post Title",
};