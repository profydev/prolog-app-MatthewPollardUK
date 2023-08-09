import styled from "styled-components";

const ContactButtonContainer = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

export function ContactButton() {
  return (
    <ContactButtonContainer
      onClick={() =>
        alert(
          "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
        )
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/message.svg" alt="Contact" />
    </ContactButtonContainer>
  );
}
