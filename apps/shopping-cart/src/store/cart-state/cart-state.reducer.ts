import { createSlice } from '@reduxjs/toolkit';
import { CartStateDto } from '../../models';
import { CartItemDto } from '../../models/CartItem.dto';

const initialState: CartStateDto = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartStateReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: CartItemDto) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find(
        (item: CartItemDto) => item.id === id
      );
      state.totalQuantity--;
      if (exisitingItem) {
        if (exisitingItem.quantity === 1) {
          state.items = state.items.filter(
            (item: CartItemDto) => item.id !== id
          );
        } else {
          exisitingItem.quantity--;
          exisitingItem.totalPrice =
            exisitingItem.totalPrice - exisitingItem.price;
        }
      }
    },
  },
});

export default CartStateReducer;
