import { ReactElement, useReducer } from 'react';
import { CartItemDto } from '../../models';
import CartContext from '../contexts/CartContext';

export interface CartProviderProps {
  children: ReactElement | ReactElement[];
}

interface CartState {
  items: CartItemDto[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      const addExistingCartItemIndex = state.items.findIndex(
        (item: CartItemDto) => item.id === action.item.id
      );

      const addExistingCartItem = state.items[addExistingCartItemIndex];

      let updatedItems;

      if (addExistingCartItem) {
        const updatedItem = {
          ...addExistingCartItem,
          amount: addExistingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[addExistingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      const addUpdatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: addUpdatedTotalAmount,
      };

    case 'REMOVE_CART_ITEM':
      const removeExistingCartItemIndex = state.items.findIndex(
        (item: CartItemDto) => item.id === action.id
      );

      const removeExistingCartItem = state.items[removeExistingCartItemIndex];

      const removeUpdatedTotalAmount =
        state.totalAmount - removeExistingCartItem.price;

      let removedUpdatedItems;

      if (removeExistingCartItem.amount === 1) {
        removedUpdatedItems = state.items.filter(
          (item: CartItemDto) => item.id !== action.id
        );
      } else {
        const updatedItem = {
          ...removeExistingCartItem,
          amount: removeExistingCartItem.amount - 1,
        };
        removedUpdatedItems = [...state.items];
        removedUpdatedItems[removeExistingCartItemIndex] = updatedItem;
      }

      return {
        items: removedUpdatedItems,
        totalAmount: removeUpdatedTotalAmount,
      };

    default:
      return initialState;
  }
};

const CartProvider = (props: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cardReducer, initialState);

  const addItemToCartHandler = (item: CartItemDto) => {
    dispatchCartAction({ type: 'ADD_CART_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
