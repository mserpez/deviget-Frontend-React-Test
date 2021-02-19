import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  DEFAULT_POST_URL,
  PostImage as PostContentComponent,
  PostImageProps,
  DEFAULT_POST_ALT,
} from ".";

export default {
  title: "Components/Post/Image",
  component: PostContentComponent,
} as Meta;

const Template: Story<PostImageProps> = (args) => (
  <PostContentComponent {...args} />
);

export const PostImage = Template.bind({});
PostImage.args = {
  url: DEFAULT_POST_URL,
  alt: DEFAULT_POST_ALT,
};
