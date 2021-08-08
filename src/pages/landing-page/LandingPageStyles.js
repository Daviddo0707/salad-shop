import styled from "styled-components/macro";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 24px;
  justify-content: center;

  @media (max-width: 767px) {
    margin: 0 16px;
  }
`;

export const ParagraphContent = styled.p`
  max-width: 480px;
`;

export const GreetingsContent = styled.div`
  position: relative;
  max-width: 640px;
  top: 48px;
`;
