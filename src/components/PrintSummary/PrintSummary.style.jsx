import styled from "styled-components";

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  > :not(:first-child) {
    margin-top: 24px;
  }
`;
