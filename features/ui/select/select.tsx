import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

type SelectProps = {
  options: Array<string>;
  label?: string;
  hint?: string;
  icon?: string;
  error?: string;
  hasError?: boolean;
  disabled?: boolean;
};

const SelectContain = styled.div`
  width: 320px;
  & div input:disabled & div {
    background: #d0d5dd;
  }
`;

const OuterLabel = styled.span`
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};
`;

const DropdownContain = styled.div<{ isError?: boolean; isOpen: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 44px;
  margin: 6px auto;
  padding: 10px 14px;
  box-sizing: border-box;
  box-radius: 8px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  & input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  ${(props) => {
    if (props.isError) {
      return css`
    border: 1px solid ${color("error", 300)};
    outline: ${props.isOpen && "none"} !important;
    &:focus {
      outline: 4px solid #fef3f2;
      `;
    } else {
      return css`
        border: 1px solid
          ${props.isOpen ? color("primary", 300) : color("gray", 300)};
        outline: ${props.isOpen && " 4px solid #F9F5FF"};

        &:focus {
          outline: 4px solid #f9f5ff;
          border: 1px solid ${color("primary", 300)};
        }
      `;
    }
  }}
`;

const SelectInput = styled.input`
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

const InnerLabel = styled.span`
  ${textFont("md", "regular")};
  &:focus-within {
    color: red;
  }
`;

const DownArrow = styled.img`
  cursor: pointer;
  margin-left: auto;
`;

const Icon = styled.img`
  display: block;
  margin-right: 11.33px;
  height: 20px;
  max-width: 20px;
`;

const DropdownListContain = styled.div`
  position: absolute;
  width: 320px;
  top: 3rem;
  left: 0;
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  box-radius: 8px;
  ${textFont("md", "regular")};
  box-shadow:
    0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
`;

const DropdownItem = styled.li<{ isSelected: boolean }>`
  list-style: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;

  img.user-icon {
    padding-left: 14px;
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-image: url("icons/check.svg");
      background-repeat: no-repeat;
      background-color: ${color("primary", 25)};
      background-position: 95% 50%;
    `}
`;

const ErrorText = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("error", 500)};
`;

const HintText = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
`;

export function Select({
  options,
  label,
  hint,
  icon,
  error,
  hasError,
  disabled,
}: SelectProps) {
  const [Selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const currentFocus = useRef<HTMLInputElement>(null);

  return (
    <SelectContain>
      <OuterLabel>{label}</OuterLabel>
      <DropdownContain
        ref={currentFocus}
        tabIndex={1}
        isOpen={isOpen}
        isError={hasError}
      >
        <SelectInput disabled={disabled} type={"text"} />
        {icon && <Icon src={icon} />}

        <InnerLabel
          style={{
            color: !Selected ? "#667085" : "#101828",
          }}
        >
          {!Selected ? "Select team member" : Selected}
        </InnerLabel>
        <DownArrow
          onClick={() => {
            if (!disabled) {
              setIsOpen(!isOpen);
            }
          }}
          src="/icons/chevron-down.svg"
        />

        {isOpen && (
          <DropdownListContain>
            <DropdownList>
              {options.map((option) => {
                return (
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setSelected(option);

                      if (currentFocus.current != null) {
                        currentFocus.current.blur();
                      }
                    }}
                    key={option}
                    isSelected={Selected === option}
                  >
                    {icon && (
                      <Icon
                        src={icon}
                        alt="icon for dropdown"
                        className="user-icon"
                      />
                    )}
                    {option}
                  </DropdownItem>
                );
              })}
            </DropdownList>
          </DropdownListContain>
        )}
      </DropdownContain>
      {error ? <ErrorText>{error}</ErrorText> : <HintText>{hint}</HintText>}
    </SelectContain>
  );
}
