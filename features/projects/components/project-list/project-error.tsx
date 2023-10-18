import Link from "next/link";
import styled from "styled-components";
import { color, textFont, space } from "@styles/theme";
import { Routes } from "@config/routes";

const OuterContainer = styled.div`
  height: 72px;

  background-color: ${color("error", 25)};
  border: 1px solid ${color("error", 300)};
  border-radius: 8px;
  a {
    color: ${color("error", 700)};
  }
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60%;
`;

const AlertCircle = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
  margin-right: ${space(4)};
  margin-left: ${space(4)};
`;

const TextMessage = styled.div`
  color: ${color("error", 700)};
  ${textFont("sm", "medium")};
  align-self: center;
`;

const ReloadAnchor = styled(Link)`
  text-decoration: none;
  align-self: center;
  margin-left: ${space(3)};
`;

const ArrowRight = styled.img`
  margin-right: ${space(4)};
  margin-left: ${space(2)};
`;

export function ErrorMessage() {
  return (
    <OuterContainer className="error-message">
      <LeftSide>
        <AlertCircle src={`/icons/alert-circle.svg`} alt="alert icon" />
        <TextMessage>
          There was a problem while loading the project data
        </TextMessage>
      </LeftSide>
      <ReloadAnchor href={Routes.projects}>
        Try again{" "}
        <ArrowRight src={`/icons/arrow-right.svg`} alt="right arrow" />
      </ReloadAnchor>
    </OuterContainer>
  );
}
