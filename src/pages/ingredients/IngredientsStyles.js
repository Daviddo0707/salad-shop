import styled from "styled-components/macro";

export const IngredientsTable = styled.div`
  margin: 16px 16px;
  overflow: auto;

  @media (max-width: 767px) {
    margin: 0 0;
  }
`;

export const TotalPriceAndCheckoutBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 15px;
`;
