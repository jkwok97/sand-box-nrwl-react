import Modal from 'apps/food-order/src/components/UI/Modal/Modal/Modal';
import { CartItemDto, UserDataDto } from 'apps/food-order/src/models';
import CartContext from 'apps/food-order/src/store/contexts/CartContext';
import { Fragment, ReactElement, useContext, useState } from 'react';
import CartItem from '../Cart-Item/CartItem';
import CartCheckout from '../Cart-Checkout/CartCheckout';
import classes from './Cart.module.css';
import OrderService from 'apps/food-order/src/services/OrderService';

export interface CartProps {
  onHideCart: () => void;
}

const Cart = (props: CartProps) => {
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: CartItemDto) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const submitOrderHandler = async (userData: UserDataDto) => {
    setIsSubmitting(true);

    await OrderService.submitOrder(userData, cartCtx.items).then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      cartCtx.clearCart();
    });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {
        (showCheckout && (
          <CartCheckout
            onCancel={props.onHideCart}
            onConfirm={submitOrderHandler}
          />
        )) as ReactElement
      }
      {(!showCheckout && modalActions) as ReactElement}
    </Fragment>
  );

  const isSubmittingContent = <p>Sending Order...</p>;
  const submittingSuccessContent = (
    <Fragment>
      <p>Order Has Been Sent!</p>

      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onBackdropClick={props.onHideCart}>
      {(!isSubmitting && !submitSuccess && cartModalContent) as ReactElement}
      {(isSubmitting && isSubmittingContent) as ReactElement}
      {
        (!isSubmitting &&
          submitSuccess &&
          submittingSuccessContent) as ReactElement
      }
    </Modal>
  );
};

export default Cart;
