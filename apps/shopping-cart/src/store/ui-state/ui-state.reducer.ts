import { createSlice } from '@reduxjs/toolkit';
import { UIStateDto } from '../../models';

const initialState: UIStateDto = {
  cartIsVisible: false,
  notification: null,
};

const UiStateReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default UiStateReducer;
