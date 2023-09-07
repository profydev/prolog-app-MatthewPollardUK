import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  size,
  color,
  children,
  disabled,
}) => (
  <div style={{ padding: 50 }}>
    <Button color={color} size={size} disabled={disabled}>
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  children: "Label",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  children: "Label",
  disabled: true,
};
