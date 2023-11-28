import * as RadixSelect from "@radix-ui/react-select";
import { color, textFont } from "@styles/theme";
import { useId, useState } from "react";
import styled from "styled-components";

// types
type SelectProps = {
  placeholder?: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  label?: React.ReactNode;
  defaultValue?: string;
  error?: string | boolean;
  hint?: string;
  onValueChange?: (value: string) => void;
};
type OptionProps = {
  children: React.ReactNode;
  value: string;
};

// styles
const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 0.875rem;
`;
const Trigger = styled(RadixSelect.Trigger)<SelectProps>`
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${({ error }) => color(error ? "error" : "gray", 300)};
  background: #fff;
  ${textFont("md", "regular")};
  display: flex;
  padding: 0.625em 0.875em;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  color: ${color("gray", 900)};
  &:focus {
    outline: none;
    box-shadow:
      0px 0px 0px 4px
        ${({ error }) => (error ? color("error", 200) : color("primary", 200))},
      0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }
  &:disabled {
    border: 1px solid ${color("gray", 300)};
    background: ${color("gray", 50)};
    cursor: not-allowed;
  }
  &:disabled * {
    color: ${color("gray", 500)};
  }
  &[data-placeholder] {
    color: ${color("gray", 500)};
  }
`;
const Content = styled(RadixSelect.Content)`
  z-index: 2;
  width: var(--radix-select-trigger-width);
  border-radius: 8px;
  background: #fff;
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.05),
    0px 12px 16px -4px rgba(16, 24, 40, 0.1);
`;

const Item = styled(RadixSelect.Item)`
  font-size: 1rem;
  color: ${color("gray", 900)};
  padding: 0.625em 0.875em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &[data-highlighted] {
    background: ${color("primary", 50)};
    outline: none;
  }
`;

const Hint = styled.p`
  margin: 0.25em 0 0 0;
  font-size: 0.875rem;
  color: ${color("gray", 500)};
`;
const Error = styled.p`
  margin: 0.25em 0 0 0;
  font-size: 0.875rem;
  color: ${color("error", 500)};
`;

export function Select({
  placeholder,
  children,
  label,
  defaultValue,
  hint,
  onValueChange,
  error = false,
  disabled = false,
}: SelectProps) {
  const [state, setState] = useState("");
  const uuid = useId();
  const hintId = `${uuid}Hint`;
  const errorId = `${uuid}Error`;
  const errorIsString = typeof error === "string";
  const ariaDescribedBy = error ? (errorIsString ? errorId : "") : hintId;

  const clearSelect = (e: React.PointerEvent<SVGSVGElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setState("");
    if (onValueChange) onValueChange("");
  };

  const handleValueChange = (value: string) => {
    setState(value);
    if (onValueChange) onValueChange(value);
  };

  return (
    <Label htmlFor={uuid}>
      {label}
      <RadixSelect.Root
        disabled={disabled}
        defaultValue={defaultValue}
        value={state}
        onValueChange={handleValueChange}
      >
        <Trigger
          id={uuid}
          aria-invalid={Boolean(error)}
          aria-describedby={ariaDescribedBy}
          error={typeof error === "string" ? error : ""}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon asChild>
            {state ? (
              <svg
                id="cross"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                onPointerDown={clearSelect}
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="#667085"
                  strokeWidth={1.66667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="#667085"
                  strokeWidth={1.667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </RadixSelect.Icon>
        </Trigger>
        {hint && !error && <Hint>{hint}</Hint>}
        {errorIsString && <Error id="errorHint">{error}</Error>}
        <Content position="popper">
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </Content>
      </RadixSelect.Root>
    </Label>
  );
}

export function Option({ children, value }: OptionProps) {
  return (
    <Item value={value}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
        >
          <path
            d="M14.6668 1L5.50016 10.1667L1.3335 6"
            stroke="#7F56D9"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </RadixSelect.ItemIndicator>
    </Item>
  );
}
