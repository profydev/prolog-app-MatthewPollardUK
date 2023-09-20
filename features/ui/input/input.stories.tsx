import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Input } from "./input";

export default {
  component: Input,
  title: "UI/Input",
  argTypes: {
    label: {
      control: "text",
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  <div style={{ padding: 50 }}>
    <Input
      label={args.label}
      disabled={args.disabled}
      svg={args.svg}
      invalid={args.invalid}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Custom label",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  svg: "/icons/mail.svg",
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};
