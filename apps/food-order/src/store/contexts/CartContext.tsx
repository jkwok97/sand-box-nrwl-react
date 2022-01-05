import React from 'react';
import { CartItemDto } from '../../models';

interface CartContextInterface {
  items: CartItemDto[];
  totalAmount: number;
  addItem: (item: CartItemDto) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItemDto) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
});

export default CartContext;
