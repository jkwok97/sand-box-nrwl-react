import { AnyAction, Reducer } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  counter: number;
  showCounter: boolean;
}

const initialState: State = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: State) {
      state.counter++;
    },
    decrement(state: State) {
      state.counter--;
    },
    increase(state: State, action: AnyAction) {
      state.counter = state.counter + action.payload;
    },
    toggle(state: State) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterStateReducer: Reducer = (
//   state = initialState,
//   action: AnyAction
// ) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case 'decrement':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'increase':
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case 'SHOW_COUNTER':
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

export default counterSlice;
