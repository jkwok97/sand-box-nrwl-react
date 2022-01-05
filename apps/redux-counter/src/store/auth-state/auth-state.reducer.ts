import { createSlice } from '@reduxjs/toolkit';

interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
