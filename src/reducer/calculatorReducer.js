// Действия для работы с калькулятором
// export const SET_VALUE = "SET_VALUE"; // Установка значения
// export const ADD = "ADD"; // Сложение
// export const SUBTRACT = "SUBTRACT"; // Вычитание
// export const MULTIPLY = "MULTIPLY"; // Умножение
// export const DIVIDE = "DIVIDE"; // Деление
// export const CLEAR = "CLEAR"; // Сброс

const initialState = {
  currentValue: 0,
  previousValue: null,
  operation: null,
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        currentValue: 0,
        previousValue: null,
        operation: null,
      };
    case "SUBTRACT":
      return {
        ...state,
        previousValue: state.currentValue,
        operation: "SUBTRACT",
      };
    case "MULTIPLY":
      return { ...state, operation: "MULTIPLY" };
    case "DIVIDE":
      return { ...state, operation: "DIVIDE" };
    case "ADD":
      return { ...state, operation: "ADD" };
    case "ADD_DIGIT":
      return {
        ...state,
        currentValue: Number(`${state.currentValue}${action.payload}`),
      };

    case "CALCULATE_RESULT":
      console.log(state);
      if (state.operation === null) {
        return state;
      }

      let result;

      if (state.operation === "SUBTRACT") {
        result = state.previousValue - state.currentValue;
      } else if (state.operation === "ADD")
        result = state.previousValue + state.currentValue;
      else if (state.operation === "MULTIPLY") {
        result = state.previousValue * state.currentValue;
      } else if (state.operation === "DIVIDE") {
        result = state.previousValue / state.currentValue;
      }

      return {
        ...state,
        currentValue: result,
        previousValue: null,
      };
    default:
      state;
  }
};

export { calculatorReducer, initialState };
