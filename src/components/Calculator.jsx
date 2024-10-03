import { useReducer } from "react";
import {
  BlueButton,
  ButtonGroup,
  Input,
  PrimaryButton,
  SecondaryButton,
  StyledCalculator,
} from "./styles/Calculator.styled";
import { calculatorReducer, initialState } from "../reducer";

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleMultiply = () => {
    dispatch({ type: "MULTIPLY" });
  };

  const handleAddDigit = (number) => {
    dispatch({ type: "ADD_DIGIT", payload: number });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE_RESULT" });
  };

  const handleDivide = () => {
    dispatch({ type: "DIVIDE" });
  };

  const handleSubstract = () => {
    dispatch({ type: "SUBTRACT" });
  };

  return (
    <StyledCalculator>
      <Input>{state.currentValue}</Input>
      <ButtonGroup>
        <SecondaryButton onClick={() => handleClear()}>C</SecondaryButton>
        <SecondaryButton>+/-</SecondaryButton>
        <SecondaryButton>%</SecondaryButton>
        <BlueButton onClick={() => handleDivide()}>÷</BlueButton>

        <PrimaryButton onClick={() => handleAddDigit(7)}>7</PrimaryButton>
        <PrimaryButton onClick={() => handleAddDigit(8)}>8</PrimaryButton>
        <PrimaryButton onClick={() => handleAddDigit(9)}>9</PrimaryButton>
        <BlueButton onClick={() => handleMultiply()}>×</BlueButton>

        <PrimaryButton onClick={() => handleAddDigit(4)}>4</PrimaryButton>
        <PrimaryButton onClick={() => handleAddDigit(5)}>5</PrimaryButton>
        <PrimaryButton onClick={() => handleAddDigit(6)}>6</PrimaryButton>
        <BlueButton onClick={() => handleSubstract()}>-</BlueButton>

        <PrimaryButton onClick={() => handleAddDigit(1)}>1</PrimaryButton>
        <PrimaryButton onClick={() => handleAddDigit(2)}>2</PrimaryButton>
        <PrimaryButton onClick={() => handleAddDigit(3)}>3</PrimaryButton>
        <BlueButton onClick={() => dispatch({ type: "ADD" })}>+</BlueButton>

        <PrimaryButton>.</PrimaryButton>
        <PrimaryButton>0</PrimaryButton>
        <PrimaryButton>&larr;</PrimaryButton>
        <BlueButton onClick={() => handleCalculate()}>=</BlueButton>
      </ButtonGroup>
    </StyledCalculator>
  );
}
