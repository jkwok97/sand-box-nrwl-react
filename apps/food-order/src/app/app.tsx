import { ReactElement, useState } from 'react';

import Header from '../components/Layout/Header/Header';
import Cart from '../containers/Cart/Cart/Cart';
import Meals from '../containers/Meals/Meals/Meals';
import CartProvider from '../store/providers/CartProvider';

export function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {(showCart && <Cart onHideCart={hideCartHandler} />) as ReactElement}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
