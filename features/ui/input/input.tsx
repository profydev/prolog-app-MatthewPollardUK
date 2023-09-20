import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

type InputProps = {
  disabled?: boolean;
  label?: string;
  svg?: string;
  invalid?: boolean;
};

const InputContainer = styled.div<{
  label?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    ${textFont("sm", "medium")};
    color: ${color("gray", 700)};
  }
`;

const InputIconsContainer = styled.div`
  position: relative;

  .icon {
    position: absolute;
    max-height: 20px;
    top: 5px;
    left: 5px;
  }
  .error-icon {
    position: absolute;
    max-height: 20px;
    top: 2px;
    left: 295px;
  }
`;

const InputElement = styled.input<{
  disabled?: boolean;
  svg?: string;
  invalid: boolean;
}>`
  appearance: none;
  width: 320px;
  font: inherit;
  color: ${color("gray", 900)};
  ${textFont("md", "regular")};

  ${(props) => {
    if (props.svg) {
      return css`
        padding-left: 30px;
      `;
    }
  }}

  border: 1px solid ${color("gray", 300)};
  border-radius: 4px;
  ::placeholder {
    color: ${color("gray", 500)};
    ${textFont("md", "regular")};
  }

  ${(props) => {
    if (props.disabled) {
      return css`
        border: 1px solid ${color("gray", 300)};
        cursor: not-allowed;
        background-color: ${color("gray", 50)};
        box-shadow: 0px 1px 2px 0px #1018280d;
      `;
    } else {
      return css``;
    }
  }}
  &:focus {
    border: 1px solid ${color("primary", 300)};
    box-shadow: 0px 0px 0px 4px #f4ebff;

    + .hint {
      display: block !important;
    }
  }

  ${(props) => {
    if (props.invalid) {
      return css`
        border: none;
        outline: 1px solid ${color("error", 300)};
        border-radius: 5px;

        + .hint {
          display: none;
        }
      `;
    }
  }}
`;
const HintText = styled.div`
  display: none;
  font-size: 12px;
  color: ${color("gray", 500)};
  margin-top: 5px;
  ${textFont("sm", "regular")};
`;
const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
  color: ${color("error", 500)} ${textFont("sm", "regular")};
`;

export function Input({
  disabled = false,
  label = "Label",
  svg = "",
  invalid = false,
}: InputProps) {
  const [inputText, setInputText] = useState("");

  return (
    <InputContainer>
      <label> {label}</label>
      <InputIconsContainer>
        <InputElement
          type="input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={disabled}
          placeholder="olivia@untitledui.com"
          svg={svg}
          invalid={invalid}
        />
        <HintText className="hint">This is a hint text to help user</HintText>
        {invalid && <ErrorMessage>This is an error message.</ErrorMessage>}

        <object className="icon" data={svg} type="image/svg+xml"></object>
        {invalid && (
          <object
            className="error-icon"
            data="/icons/alert.svg"
            type="image/svg+xml"
          ></object>
        )}
      </InputIconsContainer>
    </InputContainer>
  );
}
