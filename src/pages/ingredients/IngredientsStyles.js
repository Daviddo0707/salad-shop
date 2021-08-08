import styled from "styled-components/macro";

export const IngredientsTable = styled.div`
  margin: 1rem 1rem;
  overflow: auto;

  @media (max-width: 767px) {
    margin: 0 0rem;
  }
`;

export const TotalPriceAndCheckoutBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 1.7rem;
`;
