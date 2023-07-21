import React from "react";
import styled from "styled-components";
import { Routes } from "@config/routes";
import { FooterItemLink } from "./footer-item-link";
import { version } from "../../../version.js";
import Image from "next/image";
import { color, size, textFont, breakpoint } from "@styles/theme";

const menuItems = [
  { text: "Docs", href: Routes.docs },
  { text: "API", href: Routes.api },
  { text: "Help", href: Routes.help },
  { text: "Community", href: Routes.community },
];

const FooterContainer = styled.div`
  background-color: ${color("gray", 50)};
  display: flex;

  @media (min-width: ${breakpoint("desktop")}) {
    align-items: center;
    height: ${size("footerContainer")};
  }
`;
const FooterInnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 32px 0px 32px;
    height: ${size("footerInnerContainer")};
  }
`;
const VersionNumber = styled.p`
  color: ${color("gray", 400)};
  display: flex;
  order: 1;
  @media (min-width: ${breakpoint("desktop")}) {
    align-items: center;
    order: 0;
  }
`;
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  ${textFont("md", "medium")}
  gap: 24px;
  color: ${color("gray", 500)};
  width: 261px;
  @media (min-width: ${breakpoint("desktop")}) {
    gap: 25px;

    margin-left: -89px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <VersionNumber>Version: {version}</VersionNumber>
        <NavLinks>
          {menuItems.map((footerItem, index) => (
            <FooterItemLink key={index} {...footerItem} />
          ))}
        </NavLinks>
        <Image
          src="/icons/logo-small.svg"
          width={23}
          height={33}
          alt="Mobile ProLog logo"
        />
      </FooterInnerContainer>
    </FooterContainer>
  );
}
