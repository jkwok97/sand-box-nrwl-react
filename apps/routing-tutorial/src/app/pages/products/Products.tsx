import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Fragment>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/1">Book</Link>
        </li>
        <li>
          <Link to="/products/2">Carpet</Link>
        </li>
        <li>
          <Link to="/products/3">Computer</Link>
        </li>
        <li>
          <Link to="/products/4">Mobile Phone</Link>
        </li>
        <li>
          <Link to="/products/5">Tablet</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
