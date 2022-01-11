import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Shop/Products/Products';
import Cart from '../components/Cart/Cart/Cart';
import Layout from '../components/Layout/Layout';
import styles from './app.module.css';
import { Fragment, useEffect } from 'react';
import Notification from '../components/UI/Notification';
import {
  fetchCardData,
  sendCartData,
} from '../store/cart-state/cart-state.actions';

let isInitial = true;

export function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: any) => state.ui.cartIsVisible);
  const cart = useSelector((state: any) => state.cart);
  const notification = useSelector((state: any) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
