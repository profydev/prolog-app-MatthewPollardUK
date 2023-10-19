import styled, { keyframes } from "styled-components";
import { color, breakpoint } from "@styles/theme";

const DonutPosition = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoint("desktop")}) {
    position: relative;
    align-items: flex-start;
    top: 120px;
  }
`;

const donutSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  .donut {
    display: inline-block;
    border: 8px solid ${color("primary", 50)};
    border-left-color: ${color("primary", 600)};
    border-radius: 50%;
    width: 64px;
    height: 64px;
    animation: ${donutSpin} 1.2s linear infinite;
  }
`;

export function Spinner() {
  return (
    <DonutPosition>
      <SpinnerContainer>
        <div className="donut" />
      </SpinnerContainer>
    </DonutPosition>
  );
}
