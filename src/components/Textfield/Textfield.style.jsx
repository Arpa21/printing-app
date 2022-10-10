import styled from "styled-components";

export const TextFieldWrapper = styled.div`
  .MuiFormLabel-root {
    font-size: 16px;
    font-weight: normal;
    color: #aeacc0;

    &.Mui-focused {
      color: #4d38e1;
    }
  }

  .MuiInput-root {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.2em;
    color: #2d2936;
  }

  .MuiInput-input {
    ::placeholder {
      color: #aeacc0;
    }
  }

  .MuiInput-underline {
    &:before,
    &:after {
      border-color: #aeacc0;
    }

    &:hover {
      &:before,
      &:after {
        ${"" /* important attribute is needed to overwrite MUI styles */}
        border-color: #aeacc0 !important;
      }
    }

    &.Mui-focused {
      &:before,
      &:after {
        border-color: #4d38e1;
      }

      &:hover {
        &:before,
        &:after {
          ${"" /* important attribute is needed to overwrite MUI styles */}
          border-color: #4d38e1 !important;
        }
      }
    }
  }
`;
