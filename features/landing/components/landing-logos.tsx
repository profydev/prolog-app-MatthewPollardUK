import React from "react";
import styled from "styled-components";
import Image from "next/image";

import type { Company } from "@api/landing.types";

type CompanyProps = {
  company: Company;
};

const ContainerCompany = styled.div``;

export function LandingLogos({ company }: CompanyProps) {
  console.log(company);
  const { name, logo } = company;
  const companyImage = logo
    ? process.env.NEXT_PUBLIC_API_BASE_URL + logo
    : null;
  return (
    <ContainerCompany>
      <Image
        src={companyImage as string}
        alt={`${name}'s logo`}
        height={34}
        width={0}
        style={{ width: "100%", height: "34px" }} // optional
      ></Image>
    </ContainerCompany>
  );
}
