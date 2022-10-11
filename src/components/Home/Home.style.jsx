import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 720px;

  > :not(:first-child) {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;
