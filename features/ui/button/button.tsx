import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "empty-gray",
  error = "error",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
};

export const Container = styled.button<{
  size?: ButtonSize;
  color?: ButtonColor;
}>`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  width: fit-content;
  display: flex;
  align-items: center;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  ${(props) => {
    switch (props.size) {
      case ButtonSize.sm:
        return css`
          padding: ${space(2)} 14px;
          height: 2.25rem;
          ${textFont("sm", "medium")};
          border-radius: 8px;
        `;
      case ButtonSize.md:
        return css`
          padding: 0.625rem ${space(4)};
          height: 2.5rem;
          ${textFont("sm", "medium")};
          border-radius: 8px;
        `;
      case ButtonSize.lg:
        return css`
          padding: 0.625rem 1.125rem;
          height: 2.75rem;
          ${textFont("md", "medium")};
          border-radius: 8px;
        `;
      case ButtonSize.xl:
        return css`
          padding: ${space(3)} 1.3rem;
          height: 3rem;
          border-radius: 8px;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case ButtonColor.primary:
        return css`
          background: ${color("primary", 600)};
          color: white;
          box-shadow: 0px 1px 2px 0px #101828;
          border: 1px solid ${color("primary", 600)};
          &:hover {
            border: 1px solid ${color("primary", 700)};
            background: ${color("primary", 700)};
          }
          &:focus {
            outline: none;
            background: ${color("primary", 600)};
            border: 1px solid ${color("primary", 600)};
          }
          &:disabled {
            background: ${color("primary", 200)};
            border: 1px solid ${color("primary", 200)};
            cursor: not-allowed;
            border: 1px solid ${color("primary", 200)};
          }
        `;
      case ButtonColor.secondary:
        return css`
          background: ${color("primary", 50)};
          color: ${color("primary", 700)};
          box-shadow: 0px 1px 2px 0px #101828;
          border: 1px solid ${color("primary", 50)};
          &:hover {
            border: 1px solid ${color("primary", 100)};
            background: ${color("primary", 100)};
          }
          &:focus {
            outline: none;
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
          }
          &:disabled {
            color: ${color("primary", 25)};
            background: ${color("primary", 25)};
            cursor: not-allowed;
            border: 1px solid ${color("primary", 25)};
          }
        `;
      case ButtonColor.gray:
        return css`
          background: ${color("gray", 300)};
          color: ${color("gray", 700)};
          box-shadow: 0px 1px 2px 0px #101828;
          border: 1px solid ${color("gray", 300)};
          &:hover {
            color: ${color("gray", 800)};
            border: 1px solid ${color("gray", 300)};
            background: ${color("gray", 50)};
          }
          &:focus {
            color: ${color("gray", 700)};
            outline: none;
            background: white;
            border: 1px solid ${color("gray", 300)};
          }
          &:disabled {
            color: ${color("gray", 300)};
            background: white;
            cursor: not-allowed;
            border: 1px solid ${color("gray", 200)};
          }
        `;
      case ButtonColor.empty:
        return css`
          color: ${color("primary", 700)};

          &:hover {
            color: ${color("primary", 700)};
            background: ${color("primary", 50)};
          }
          &:focus {
            color: ${color("primary", 700)};
            outline: none;
          }
          &:disabled {
            color: ${color("gray", 300)};
            cursor: not-allowed;
          }
        `;
      case ButtonColor.emptyGray:
        return css`
          color: ${color("gray", 500)};

          &:hover {
            color: ${color("gray", 600)};
            background: ${color("gray", 50)};
          }
          &:focus {
            color: ${color("gray", 500)};
            outline: none;
          }
          &:disabled {
            color: ${color("gray", 300)};
            cursor: not-allowed;
          }
        `;
      case ButtonColor.error:
        return css`
          background: ${color("error", 600)};
          color: white;
          box-shadow: 0px 1px 2px 0px #101828;
          border: 1px solid ${color("error", 600)};
          &:hover {
            color: white;
            border: 1px solid ${color("error", 700)};
            background: ${color("error", 700)};
          }
          &:focus {
            color: white;
            outline: none;
            background: ${color("error", 600)};
            border: 1px solid ${color("error", 600)};
          }
          &:disabled {
            color: white;
            background: ${color("error", 200)};
            cursor: not-allowed;
            border: 1px solid ${color("error", 200)};
          }
        `;
    }
  }}
`;

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  disabled = false,
}: ButtonProps) {
  return (
    <Container size={size} color={color} disabled={disabled ? true : undefined}>
      {children}
    </Container>
  );
}
