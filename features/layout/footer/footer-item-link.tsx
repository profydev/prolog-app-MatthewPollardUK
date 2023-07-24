import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { color } from "@styles/theme";

type FooterItemProps = {
  text: string;
  href: string;
};

export const FooterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
  }
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color("gray", 500)};
  text-decoration: none;
`;

export function FooterItemLink({ text, href }: FooterItemProps) {
  return (
    <FooterItem>
      <Anchor href={href}>{text}</Anchor>
    </FooterItem>
  );
}
