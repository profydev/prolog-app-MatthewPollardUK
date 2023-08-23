import React from "react";
import Styled, { css } from "styled-components";
import Image from "next/image";
import { breakpoint } from "@styles/theme";
import type { Testimonial } from "@api/landing.types";

import { color, displayFont, textFont, space } from "@styles/theme";

type TestimonialProps = {
  testimonial: Testimonial;
  index: number;
};

const ContainerOuterTestimonial = Styled.blockquote`
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
      @media (min-width: ${breakpoint("desktop")}) {
  
  width: 375px;
    height: 416px;

      }
`;

const TestimonialTitle = Styled.h2`
  margin: 0em 0;

text-align: center;
  ${textFont("sm", "semibold")}
  color: ${color("primary", 700)};
  padding-top: ${space(16)}; 
  padding-right: ${space(4)};
  padding-bottom: ${space(3)};
  padding-left: ${space(4)};
`;

const TestimonialText = Styled.p<{ index: number }>`
 margin: 0em 0;
 
text-align: center;
  ${displayFont("xs", "medium")}

${({ index }) =>
  index % 2 === 0
    ? css`
        color: ${color("primary", 900)};
      `
    : css`
        color: ${color("gray", 900)};
      `};
  

  padding-right: ${space(4)};
  padding-bottom: ${space(6)};
  padding-left: ${space(4)};
`;

const TestimonialImage = Styled(Image)`
margin: 0 auto;
border-radius: 50%;
display: block;
padding-bottom: ${space(4)}; 
`;

const TestimonialName = Styled.p<{ index: number }>`
margin: 0em 0;

text-align: center;
padding-bottom: ${space(1)};
  ${textFont("md", "medium")}

  
${({ index }) =>
  index % 2 === 0
    ? css`
        color: ${color("primary", 900)};
      `
    : css`
        color: ${color("gray", 900)};
      `};
`;
const TestimonialRoleAndCompany = Styled.p<{ index: number }>`
margin: 0em 0;

text-align: center;
padding-bottom: ${space(16)};
  ${textFont("sm", "regular")}

  ${({ index }) =>
    index % 2 === 0
      ? css`
          color: ${color("primary", 700)};
        `
      : css`
          color: ${color("gray", 500)};
        `};
`;

export function LandingTestimonials({ testimonial, index }: TestimonialProps) {
  const { title, text, userCompany, userImage, userName, userRole } =
    testimonial;
  const { height, src, width } = userImage;
  const fullUserImage = src ? process.env.NEXT_PUBLIC_API_BASE_URL + src : null;
  console.log(index);
  return (
    <ContainerOuterTestimonial>
      <TestimonialTitle>{title}</TestimonialTitle>
      <TestimonialText index={index}>{text}</TestimonialText>
      <TestimonialImage
        src={fullUserImage as string}
        alt={`${userName}'s picture`}
        height={height}
        width={width}
      ></TestimonialImage>
      <TestimonialName index={index}>{userName}</TestimonialName>
      <TestimonialRoleAndCompany index={index}>
        {userRole}, {userCompany}
      </TestimonialRoleAndCompany>
    </ContainerOuterTestimonial>
  );
}
