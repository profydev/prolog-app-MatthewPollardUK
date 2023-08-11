import React from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";
import { useMediaQuery } from "react-responsive";

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

type LogoSwitcherProps = {
  isSidebarCollapsed: boolean;
};

export function LogoSwitcher({ isSidebarCollapsed }: LogoSwitcherProps) {
  const isDesktop = useMediaQuery({ minWidth: theme.breakpoint.desktop });

  const logoDisplay = !isSidebarCollapsed
    ? "/icons/logo-large.svg"
    : isDesktop
    ? "/icons/logo-small.svg"
    : "/icons/logo-large.svg";

  return (
    <>
      <LogoImage src={logoDisplay} alt="Profy Logo" />
    </>
  );
}
