import classes from './ModalBackdrop.module.css';

export interface ModalBackdropProps {}

const ModalBackdrop = (props: ModalBackdropProps) => {
  return <div className={classes.backdrop}></div>;
};

export default ModalBackdrop;
