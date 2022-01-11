import { createSlice } from '@reduxjs/toolkit';
import { UIStateDto } from '../../models';

const initialState: UIStateDto = {
  cartIsVisible: false,
};

const UiStateReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default UiStateReducer;