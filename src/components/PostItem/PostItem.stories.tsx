import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PostItem as PostItemComponent, IPostItemProps } from ".";

export default {
  title: "Components/Post/Item",
  component: PostItemComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IPostItemProps> = (args) => (
  <PostItemComponent {...args} />
);

export const PostItem = Template.bind({});
PostItem.args = {
  post: {
    id: "1",
    title: "Post 1",
    author: "mserpez",
    createdAt: new Date().getTime(),
    commentsQty: 1000000,
    photoURL: "",
    photoURLBig: "",
    thumbnail: "",
  },
};
