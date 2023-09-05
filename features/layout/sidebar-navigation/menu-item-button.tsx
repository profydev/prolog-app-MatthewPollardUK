import React from "react";

import { ListItem, Anchor, Icon } from "./app-menu-item-link";
import styled from "styled-components";
import { color } from "@styles/theme";

type ButtonMailToProps = {
  mailto: string;
  children: JSX.Element;
  as: React.ElementType;
};

const ButtonMailTo = ({
  mailto,
  children,
  as: Component,
}: ButtonMailToProps) => {
  return (
    <Component
      onClick={(e: React.MouseEvent) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </Component>
  );
};
const Button = styled.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick?: () => void;
  isCollapsed: boolean;
  href?: string;
};

const StyledMenuItemButton = styled.div`
  color: ${color("gray", 100)};
`;

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
  href,
}: MenuItemProps) {
  return (
    <>
      {href ? (
        <ListItem className={className}>
          <ButtonMailTo as={Button} mailto={href}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <>
              <StyledMenuItemButton>
                <Icon src={iconSrc} alt={`${text} icon`} />{" "}
                {!isCollapsed && text}{" "}
              </StyledMenuItemButton>
            </>
          </ButtonMailTo>
        </ListItem>
      ) : (
        <ListItem className={className}>
          <Anchor as={Button} onClick={onClick}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Icon src={iconSrc} alt={`${text} icon`} /> {!isCollapsed && text}
          </Anchor>
        </ListItem>
      )}
    </>
  );
}
