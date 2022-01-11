import { useSelector } from 'react-redux';
import Products from '../components/Shop/Products/Products';
import Cart from '../components/Cart/Cart/Cart';
import Layout from '../components/Layout/Layout';
import styles from './app.module.css';

export function App() {
  const showCart = useSelector((state: any) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
