const initialState = {
  currentValue: 0,
  previousValue: null,
  operation: null,
  num: 0,
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        currentValue: 0,
        previousValue: null,
        operation: null,
        num: null,
      };
    case "SUBTRACT":
      return {
        ...state,
        previousValue: state.currentValue,
        operation: "SUBTRACT",
        num: 1,
      };
    case "MULTIPLY":
      return {
        ...state,
        previousValue: state.currentValue,
        operation: "MULTIPLY",
        num: 1,
      };
    case "DIVIDE":
      return {
        ...state,
        previousValue: state.currentValue,
        operation: "DIVIDE",
        num: 1,
      };
    case "ADD":
      return {
        ...state,
        previousValue: state.currentValue,
        operation: "ADD",
        num: 1,
      };
    case "ADD_DIGIT":
      if (state.num === 1) {
        return {
          ...state,
          currentValue: action.payload,
          num: 0,
        };
      } else {
        return {
          ...state,
          currentValue: Number(`${state.currentValue}${action.payload}`),
        };
      }

    case "ADD_DECIMAL":
      if (state.currentValue.toString().includes(".")) {
        return state;
      }
      return {
        ...state,
        currentValue: `${state.currentValue}.`,
      };

    case "PERCENTAGE":
      return {
        ...state,
        currentValue: state.currentValue / 100,
      };

    case "TOGGLE_SIGN":
      return {
        ...state,
        currentValue: state.currentValue * -1,
      };

    case "DELETE_LAST_DIGIT":
      return {
        ...state,
        currentValue: state.currentValue.toString().slice(0, -1) || "0",
      };

    case "CALCULATE_RESULT":
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
        currentValue: parseFloat(result.toFixed(5)),
        previousValue: null,
      };
    default:
      state;
  }
};

export { calculatorReducer, initialState };
