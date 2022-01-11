import { CartItemDto } from '../../models';
import { UiStateActions } from '../ui-state';
import CartStateReducer from './cart-state.reducer';

export const fetchCardData = () => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-f028d-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Cart error!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        CartStateActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        UiStateActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Getting cart data failed',
        })
      );
    }
  };
};

export const sendCartData = (cart: CartItemDto) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(
      UiStateActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-f028d-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending Cart Data Failed');
      }
    };

    try {
      await sendRequest();

      dispatch(
        UiStateActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        UiStateActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed',
        })
      );
    }
  };
};

export const CartStateActions = CartStateReducer.actions;
