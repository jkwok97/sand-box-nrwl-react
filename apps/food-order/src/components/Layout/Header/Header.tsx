import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export interface HeaderProps {
  onShowCart: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
