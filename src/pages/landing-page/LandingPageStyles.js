import styled from "styled-components/macro";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 1.5rem;
  justify-content: center;

  @media (max-width: 767px) {
    margin: 0 1rem;
  }
`;

export const ParagraphContent = styled.p`
  max-width: 30rem;
`;

export const GreetingsContent = styled.div`
  position: relative;
  max-width: 40rem;
  top: 3rem;
`;
