import styles from './app.module.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/welcome/Welcome';
import Products from './pages/products/Products';
import ProductDetail from './pages/product-detail/ProductDetail';

import MainHeader from './components/main-header/MainHeader';

export function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
