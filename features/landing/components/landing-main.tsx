import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import { LandingLogos } from "./landing-logos";
import { LandingTestimonials } from "./landing-testimonials";
import { useGetLanding } from "../api/use-get-landing";

const LandingContainer = styled.div``;

const MainSection = styled.main`
  background: ${color("gray", 50)};
`;
const MainImageContainer = styled.div<{ width: number; height: number }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.width &&
    css`
      max-width: ${props.width}px;
    `};
  ${(props) =>
    props.height &&
    css`
      max-height: ${props.height}px;
    `};

  padding-bottom: ${space(16)};
  margin: auto;

  @media (min-width: ${breakpoint("desktop")}) {
    padding-bottom: ${space(24)};
  }
`;

const MainImage = styled(Image)`
  position: relative !important;

  width: calc(100% - 32px) !important;
  margin: auto;
`;

const Title = styled.h1`
  margin: 0em 0;

  ${displayFont("md", "semibold")}
  color:  ${color("gray", 900)};
  text-align: center;
  padding-top: ${space(16)};
  padding-right: ${space(4)};
  padding-left: ${space(4)};

  @media (min-width: ${breakpoint("desktop")}) {
    ${displayFont("xl", "semibold")}
    padding-top: ${space(24)};
  }
`;
const MainSubtitle = styled.h2`
  margin: 0em 0;

  ${textFont("lg", "regular")};
  color: ${color("gray", 500)};
  text-align: center;
  padding-top: ${space(4)};
  padding-right: ${space(4)};
  padding-bottom: ${space(16)};
  padding-left: ${space(4)};
  @media (min-width: ${breakpoint("desktop")}) {
    ${textFont("xl", "regular")}
    padding-top: ${space(6)};
  }
`;

const TestimonialIntro = styled.h2<{ paddingBottom: boolean }>`
  margin: 0em 0;

  ${textFont("xl", "regular")};
  color: ${color("gray", 500)};
  text-align: center;
  padding-top: ${space(6)};
  padding-right: ${space(6)};
  padding-left: ${space(6)};
  ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: ${space(16)};
    `};
`;
const RecommendedSection = styled.section`
  background: white;
  @media (min-width: ${breakpoint("desktop")}) {
    background: ${color("gray", 50)};
  }
`;
const RecommendedText = styled.h2`
  margin: 0em 0;

  color: ${color("gray", 500)};
  ${textFont("md", "medium")}
  text-align: center;
  padding-top: ${space(16)};
  padding-bottom: ${space(8)};
  @media (min-width: ${breakpoint("desktop")}) {
    padding-top: ${space(24)};
  }
`;
const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  list-style: none;
  padding: 0 16px;
  padding-bottom: ${space(16)};
  margin: 0;
  li {
    height: 34px;
  }
  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: row;
    padding: 0 112px;
    padding-bottom: ${space(24)};
    gap: 96px;
  }
`;

const TestimonialSection = styled.section`
  @media (min-width: ${breakpoint("desktop")}) {
    background-color: white;
  }
`;
const TestimonialSectionIntro = styled.div`
  background: ${color("gray", 50)};
  @media (min-width: ${breakpoint("desktop")}) {
    background-color: white;
  }
`;
const TestimonialList = styled.ul`
  margin: 0em 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
  padding-inline-start: 0px;

  li:nth-child(odd) {
    background-color: ${color("primary", 50)};
  }

  li:nth-child(even) {
    background-color: white;
  }

  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    padding-right: ${space(24)};
    padding-bottom: ${space(24)};
    padding-left: ${space(24)};
    li:nth-child(even) {
      background-color: ${color("gray", 50)};
    }
  }
`;

export function LandingMain() {
  const { data, isLoading, isError, error } = useGetLanding();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
  //console.log(data);
  const dataSectionMain = data.sections[0];
  const dataSectionMainImage = dataSectionMain.image
    ? process.env.NEXT_PUBLIC_API_BASE_URL + dataSectionMain.image.src
    : null;
  const dataRecommendedBy = data.sections[1];
  const dataTestimonials = data.sections[2];
  return (
    <LandingContainer>
      <MainSection>
        <Title> {dataSectionMain.title} </Title>
        <MainSubtitle>{dataSectionMain.subtitle}</MainSubtitle>
        {dataSectionMain.image && (
          <MainImageContainer
            width={dataSectionMain.image.width}
            height={dataSectionMain.image.height}
          >
            <MainImage
              src={dataSectionMainImage as string}
              alt="Landing main image"
              fill
              priority
              loading="eager"
            />
          </MainImageContainer>
        )}
      </MainSection>
      <RecommendedSection>
        <RecommendedText> {dataRecommendedBy.title} </RecommendedText>
        <CompanyList>
          {dataRecommendedBy.companies?.map((company) => (
            <li key={company.name}>
              <LandingLogos company={company} />
            </li>
          ))}
        </CompanyList>
      </RecommendedSection>
      <TestimonialSection>
        <TestimonialSectionIntro>
          <Title>{dataTestimonials.title}</Title>
          <TestimonialIntro paddingBottom={true}>
            {dataTestimonials.subtitle}
          </TestimonialIntro>
        </TestimonialSectionIntro>
        <TestimonialList>
          {dataTestimonials.testimonials?.map((testimonial, index) => (
            <li key={index}>
              <LandingTestimonials testimonial={testimonial} index={index} />
            </li>
          ))}
        </TestimonialList>
      </TestimonialSection>
    </LandingContainer>
  );
}
