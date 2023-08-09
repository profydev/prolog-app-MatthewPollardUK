import styled, { css } from "styled-components";
import { useState } from "react";
import { textFont, color } from "@styles/theme";
import Image from "next/image";

interface ModalOverlayProps {
  withBackdropFilter?: boolean;
}

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

const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  display: grid;
  place-items: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
  background-color: #344054;
  z-index: 1002;
  opacity: 60%;
  /* Add backdrop-filter property */
  ${({ withBackdropFilter }) =>
    withBackdropFilter &&
    css`
      backdrop-filter: blur(24px);
    `}
`;

const LandingModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  height: 240px;
  width: 352px;
  padding: 24px;
  border-radius: 12px;
  z-index: 1003;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto auto 1fr;

  box-shadow: 0px 20px 24px -4px #1018281a;

  .email-icon {
    grid-row: 2;
    grid-column: 1 / span 6;
    margin: 0 auto;
  }
  p.contact-header {
    grid-row: 3;
    grid-column: 1 / span 6;
    text-align: center;
    color: ${color("gray", 900)};
    ${textFont("lg", "medium")}
    margin-block-end: 0.7em;
  }
  p.modal-text {
    grid-row: 4;
    grid-column: 1 / span 6;
    text-align: center;
    ${textFont("sm", "regular")}
    color:  ${color("gray", 500)};
    margin-block-start: 0em;
  }
`;

const OptionButtons = styled.div`
  grid-row: 5;
  grid-column: 1 / span 6;
  width: 352px;
  margin: 0 auto;

  .close-modal {
    border: 1px solid ${color("gray", 300)};
    background-color: white;
    width: 170px;
    height: 44px;
    margin-right: 8px;
    border-radius: 8px;
    padding: 10px 18px 10px 18px;
    color: ${color("gray", 700)};
    ${textFont("md", "medium")}
  }
  .open-email-app {
    border: 1px solid ${color("primary", 600)};
    background: ${color("primary", 600)};
    border-radius: 8px;
    width: 170px;
    height: 44px;
    padding: 10px 18px 10px 18px;
    box-shadow: 0px 1px 2px 0px #1018280d;
    ${textFont("md", "medium")};
    color: white;
    text-decoration: none;
  }
`;

const EmailSvg = styled.img`
  .email-path {
    fill: red;
  }
`;

export function ContactButton() {
  const [landingContactModalOpen, setLandingContactModalOpen] = useState(false);
  return (
    <>
      <ContactButtonContainer
        onClick={() => setLandingContactModalOpen(!landingContactModalOpen)}
      >
        <Image src="/icons/message.svg" alt="Contact" width="24" height="24" />
      </ContactButtonContainer>

      {landingContactModalOpen && (
        <>
          <ModalOverlay withBackdropFilter />

          <LandingModalContent>
            <EmailSvg
              src="/icons/mail.svg"
              alt="Contact"
              className="email-icon"
            />
            <p className="contact-header">Contact Us Via Email</p>

            <p className="modal-text">
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours
            </p>
            <OptionButtons>
              <button
                className="close-modal"
                onClick={() => setLandingContactModalOpen(false)}
              >
                Cancel
              </button>
              <a
                href="mailto:prolog@profy.dev?subject=Support Request: "
                className="open-email-app"
              >
                Open Email App
              </a>
            </OptionButtons>
          </LandingModalContent>
        </>
      )}
    </>
  );
}
