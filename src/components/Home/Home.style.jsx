import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;

  img {
    max-height: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 40px;

    img {
      max-height: 200px;
    }
  }
`;

export const MainContent = styled.div`
  > :not(:first-child) {
    margin-top: 24px;
  }
`;
