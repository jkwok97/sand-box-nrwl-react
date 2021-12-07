import styles from './Card.module.css';

const Card = (props: any) => {
  const classes = `${styles.card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
