import { CartItemDto, UserDataDto } from '../models';

const OrderService = {
  submitOrder: async (userData: UserDataDto, cartItems: CartItemDto[]) => {
    const response = await fetch(
      'https://react-http-f028d-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      }
    );
  },
};

export default OrderService;
