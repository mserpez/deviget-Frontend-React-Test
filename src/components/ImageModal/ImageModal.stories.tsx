import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ImageModal as ImageModalComponent, IImageModalPorps } from ".";

export default {
  title: "Components/Post/Content",
  component: ImageModalComponent,
} as Meta;

const Template: Story<IImageModalPorps> = (args) => (
  <ImageModalComponent {...args} />
);

export const ImageModal = Template.bind({});
