/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ProductItemDto } from 'apps/shopping-cart/src/models';
import ProductItem from '../Product-Item/ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS: ProductItemDto[] = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The second book I ever wrote',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProductsProps {}

const Products = (props: ProductsProps) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product: ProductItemDto) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
