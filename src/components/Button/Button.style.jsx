import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 720px;

  @media (max-width: 768px) {
    width: 300px;
  }

  .MuiButton-contained {
    background-color: rgb(20, 110, 34);
    color: rgb(232, 230, 227);
    transition: background-color 0.25s, border-color 0.25s, color 0.25s;
    border-radius: 4px;
    border: 2px solid rgb(32, 175, 55);
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    padding: 11px 24px 12px;

    &:hover {
      background-color: rgb(0, 79, 18);
      border-color: rgb(124, 115, 102);
      color: rgb(232, 230, 227);
    }
  }

  .MuiButton-outlined {
    border: 2px solid rgb(32, 175, 55);
    padding: 11px 24px 12px;
    color: rgb(232, 230, 227);

    &:hover {
      background-color: rgb(0, 79, 18);
      border-color: rgb(124, 115, 102);
      color: rgb(232, 230, 227);
    }
  }

  .Mui-disabled {
    border-color: rgb(124, 115, 102);
  }
`;
