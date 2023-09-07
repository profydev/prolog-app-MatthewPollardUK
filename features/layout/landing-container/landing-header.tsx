import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { Routes } from "@config/routes";

import { breakpoint, color, textFont, zIndex } from "@styles/theme";
import { LandingMenuItemLink } from "./landing-menu-item-link";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
];

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: white;
  position: relative;
  flex-wrap: wrap;
  padding: 0px 12px 0px 16px;
  min-height: 72px;
  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: row;
    height: 80px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0px 32px 0px 32px;
  }
`;

const Logo = styled.img``;

const LandingMenuButton = styled.button`
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
  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const LandingMenuIcon = styled.img``;

const MenuOverlay = styled.div<{ isLandingMobileMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${color("gray", 700)};

  z-index: ${(props) => zIndex("header")(props) - 1};

  opacity: ${({ isLandingMobileMenuOpen }) =>
    isLandingMobileMenuOpen ? "60%" : "0%"};
  transform: translateX(
    ${({ isLandingMobileMenuOpen }) => (isLandingMobileMenuOpen ? "0" : "100%")}
  );
  transition:
    opacity 300ms,
    transform 0s
      ${({ isLandingMobileMenuOpen }) =>
        isLandingMobileMenuOpen ? "0s" : "300ms"};

  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const Nav = styled.nav<{ isLandingMobileMenuOpen: boolean }>`
  display: ${({ isLandingMobileMenuOpen }) =>
    isLandingMobileMenuOpen ? "block" : "none"};
  padding: 10px;
  margin: 5px;
  order: 1;
  flex-basis: 100%;
  border-top: 1px solid ${color("gray", 700)};
  @media (min-width: ${breakpoint("desktop")}) {
    display: block;
    order: 0;
    flex-basis: auto;
    display: flex;
    flex-direction: row;
    gap: 32px;
    border-top: 0px;
  }
`;

const CallActionButton = styled.button<{ isLandingMobileMenuOpen: boolean }>`
  display: ${({ isLandingMobileMenuOpen }) =>
    isLandingMobileMenuOpen ? "block" : "none"};
  order: 2;
  flex-basis: 100%;
  @media (min-width: ${breakpoint("desktop")}) {
    flex-basis: auto;
    display: inline-block;

    background: ${color("primary", 600)};
    color: #ffffff;
    ${textFont("md", "medium")};
    padding: 10px 18px 10px 18px;
    text-decoration: none;
    border: 1px;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px #1018280d;
  }
`;

export function LandingHeader() {
  const router = useRouter();
  const [isLandingMobileMenuOpen, setLandingMobileMenuOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
        <Logo src="/icons/logo-large.svg" alt="Prolog logo" className="item" />

        <LandingMenuButton
          className="item"
          onClick={() => setLandingMobileMenuOpen(!isLandingMobileMenuOpen)}
        >
          <LandingMenuIcon
            src={
              isLandingMobileMenuOpen
                ? "/icons/landing-close.svg"
                : "/icons/landing-menu.svg"
            }
            alt={isLandingMobileMenuOpen ? "close menu" : "open menu"}
          />
        </LandingMenuButton>

        <Nav className="item" isLandingMobileMenuOpen={isLandingMobileMenuOpen}>
          {menuItems.map((menuItem, index) => (
            <LandingMenuItemLink
              key={index}
              {...menuItem}
              isActive={router.pathname === menuItem.href}
            />
          ))}
        </Nav>
        <CallActionButton
          className="item"
          isLandingMobileMenuOpen={isLandingMobileMenuOpen}
          as="a"
          href={Routes.projects}
        >
          Open Dashboard
        </CallActionButton>
      </HeaderContainer>
      <MenuOverlay isLandingMobileMenuOpen={isLandingMobileMenuOpen} />
    </>
  );
}
