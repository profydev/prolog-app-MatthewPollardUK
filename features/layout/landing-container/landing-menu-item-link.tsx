import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { color, textFont } from "@styles/theme";

type MenuItemProps = {
  text: string;
  href: string;
  isActive: boolean;
};

const ListItem = styled.li<{ isActive?: boolean }>`
  list-style-type: none;
`;

const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
  text-decoration: none;
`;

export function LandingMenuItemLink({ text, href }: MenuItemProps) {
  return (
    <ListItem>
      <Anchor href={href}>{text}</Anchor>
    </ListItem>
  );
}
