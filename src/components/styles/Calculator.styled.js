import styled from "styled-components";

export const StyledCalculator = styled.div`
  margin-top: 175px;
  width: 728px;
  background-color: inherit;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  button {
    height: 72px;
    border-radius: 24px;
    color: #fff;
    font-size: 32px;
    border: none;
    user-select: none;
    cursor: pointer;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #4e505f;

  &:hover {
    background-color: #43454e;
  }

  &:active {
    background-color: #3a3c48;
  }
`;

export const BlueButton = styled.button`
  background-color: #4b5efc;

  &:hover {
    background-color: #3a4bc3;
  }

  &:active {
    background-color: #353e9a;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #2e2f38;

  &:hover {
    background-color: #3a3b44;
  }

  &:active {
    background-color: #1a1a1a;
  }
`;

export const Input = styled.div`
  color: #fff;
  direction: rtl;
  font-size: 96px;
  font-weight: 100;
  margin-bottom: 16px;
`;
