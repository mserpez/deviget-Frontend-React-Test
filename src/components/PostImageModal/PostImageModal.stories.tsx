import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PostImageModal as PostImageModalComponent, PostImageModalProps } from ".";

export default {
  title: "Components/PostImageModal",
  component: PostImageModalComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PostImageModalProps> = (args) => <PostImageModalComponent {...args} />;

export const PostImageModal = Template.bind({});
PostImageModal.args = {
  label: "Dismiss All",
  onClick: alert,
};
