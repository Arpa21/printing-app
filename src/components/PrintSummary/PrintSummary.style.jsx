import styled from "styled-components";

export const SummaryPage = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > :first-child {
    align-self: flex-start;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  > :not(:first-child) {
    margin-top: 24px;
  }
`;
