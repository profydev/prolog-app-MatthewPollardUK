import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { breakpoint } from "@styles/theme";
import { LandingHeader } from "./landing-header";
import { ContactButton } from "../contact-button";

type LandingPageContainerProps = {
  children: React.ReactNode;
  title: string;
};

const Container = styled.div`
  @media (min-width: ${breakpoint("desktop")}) {
  }
`;
const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div``;

export function LandingPageContainer({
  children,
  title,
}: LandingPageContainerProps) {
  const documentTitle = `ProLog - ${title}`;
  return (
    <Container>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingHeader />
      <Main>
        <ContentContainer>{children}</ContentContainer>
      </Main>
      <ContactButton />
    </Container>
  );
}
