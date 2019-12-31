import * as actionTypes from './actions/actions';
const initialState = {
  result: 0,
  operand: '',
  background: '',
  lastNumber: '', //for more than one digit Number
  lightTheme: 'true'
};

const reducer = (state = initialState, action) => {
  const value = action.val;
  const operand = state.operand;
  const result = state.result;
  const background = state.background;
  const lastNumber = state.lastNumber;

  switch (action.type) {
    case actionTypes.ADD_OPERAND:
      if (operand.length === 0) {
        //Handling Error
        return {
          ...state,
          result: eval(background + operand + result),
          operand: value,
          background: eval(background + operand + result),
          lastNumber: ''
        };
      } else {
        return {
          ...state
        };
      }

    case actionTypes.ADD_NUMBER:
      return {
        ...state,
        result: lastNumber + value,
        lastNumber: lastNumber + value
      };
    case actionTypes.CLEAR_RESULT:
      return {
        result: 0,
        operand: '',
        background: '',
        lastNumber: ''
      };
    case actionTypes.SHOW_RESULT:
      return {
        result: eval(background + operand + result),
        operand: '',
        background: '',
        lastNumber: ''
      };
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        lightTheme: !state.lightTheme
      };
  }
  return state;
};

export default reducer;
