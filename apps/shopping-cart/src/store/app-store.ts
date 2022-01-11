import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import CartStateReducer from './cart-state/cart-state.reducer';
import UiStateReducer from './ui-state/ui-state.reducer';

const AppStore: EnhancedStore = configureStore({
  reducer: {
    ui: UiStateReducer.reducer,
    cart: CartStateReducer.reducer,
  },
});

export default AppStore;
