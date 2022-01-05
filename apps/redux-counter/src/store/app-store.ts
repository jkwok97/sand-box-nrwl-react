import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import authSlice from './auth-state/auth-state.reducer';
import counterSlice from './counter-state/counter-state.reducer';

const store: EnhancedStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
