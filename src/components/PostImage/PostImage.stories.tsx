import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PostImage as PostContentComponent, PostImageProps } from ".";

export default {
  title: "Components/Post/Image",
  component: PostContentComponent,
} as Meta;

const DEFAULT_POST_URL = "https://via.placeholder.com/115x110";
const DEFAULT_POST_ALT = "Image placeholder";

const Template: Story<PostImageProps> = (args) => (
  <PostContentComponent {...args} />
);

export const PostImage = Template.bind({});
PostImage.args = {
  url: DEFAULT_POST_URL,
  alt: DEFAULT_POST_ALT,
};
