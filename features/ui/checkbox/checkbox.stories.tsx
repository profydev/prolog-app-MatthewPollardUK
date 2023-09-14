import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Checkbox } from "./checkbox";

export default {
  component: Checkbox,
  title: "UI/Checkbox",
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <Checkbox
    type={args.type}
    checkboxSize={args.checkboxSize}
    label={args.label}
    indeterminateForStorybook={args.indeterminateForStorybook}
    checked={args.checked}
    disabled={args.disabled}
  />
);

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

export const Small = Template.bind({});
Small.args = {
  checkboxSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  checkboxSize: "medium",
};

export const Label = Template.bind({});
Label.args = {
  label: "Label",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminateForStorybook: true,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled: StoryFn<typeof Checkbox> = (args) => (
  <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
    <Checkbox
      type={args.type}
      checkboxSize={args.checkboxSize}
      label="Label"
      indeterminateForStorybook={args.indeterminateForStorybook}
      checked={false}
      disabled={true}
    />
    <Checkbox
      type={args.type}
      checkboxSize={args.checkboxSize}
      label="Label"
      indeterminateForStorybook={args.indeterminateForStorybook}
      checked={true}
      disabled={true}
    />
  </div>
);
