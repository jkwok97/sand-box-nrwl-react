import { ReactElement } from 'react';
import classes from './Card.module.css';

export interface CardProps {
  children: ReactElement[] | ReactElement;
}

const Card = (props: CardProps) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
