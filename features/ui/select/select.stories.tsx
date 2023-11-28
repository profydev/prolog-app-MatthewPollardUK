import React from "react";
import { Meta } from "@storybook/react";
import { Select, Option } from "./select";

export default {
  title: "UI/Select",
} as Meta<typeof Select>;

export function Default() {
  return (
    <div style={{ padding: 50 }}>
      <Select placeholder="Select an option">
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
        <Option value="option4">Option Four</Option>
        <Option value="option5">Option Five</Option>
      </Select>
    </div>
  );
}

export function Label() {
  return (
    <div style={{ padding: 50 }}>
      <Select
        placeholder="Select an option"
        label={"Select Option"}
        defaultValue="option1"
      >
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
        <Option value="option4">Option Four</Option>
        <Option value="option5">Option Five</Option>
      </Select>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 50 }}>
      <Select placeholder="Select an option" disabled>
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
        <Option value="option4">Option Four</Option>
        <Option value="option5">Option Five</Option>
      </Select>
    </div>
  );
}

export function Hint() {
  return (
    <div style={{ padding: 50 }}>
      <Select placeholder="Select an option" hint="you should select an option">
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
        <Option value="option4">Option Four</Option>
        <Option value="option5">Option Five</Option>
      </Select>
    </div>
  );
}

export function Error() {
  return (
    <div style={{ padding: 50 }}>
      <Select placeholder="Select an option" error="something went wrong :(">
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
        <Option value="option4">Option Four</Option>
        <Option value="option5">Option Five</Option>
      </Select>
    </div>
  );
}
