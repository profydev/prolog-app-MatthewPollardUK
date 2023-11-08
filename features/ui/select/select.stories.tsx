import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Select } from "./select";

export default {
  component: Select,
  title: "UI/Select",
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={{ padding: 50 }}>
    <Select
      {...args}
      options={[
        "Phoenix Baker",
        "Olivia Rhye",
        "Lana Steiner",
        "Demi Wilkinson",
        "Candice Wu",
        "Natali Craig",
        "Drew Cano",
      ]}
      icon="/icons/user.svg"
    />
  </div>
);

export const Default = Template.bind({});
