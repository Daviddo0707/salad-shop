import styled from "styled-components/macro";

export const CheckoutContainer = styled.div`
  align-items: center;
  margin: 16px 70px;
  min-width: 320px;
  max-width: 960px;

  @media (max-width: 767px) {
    margin: 0 8px;
    min-width: 240px;
  }
`;
export const FromAndBtnContainer = styled.div`
  display: flex;
  padding-bottom: 30px;
`;
