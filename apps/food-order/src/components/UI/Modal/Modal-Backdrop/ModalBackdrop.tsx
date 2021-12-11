import classes from './ModalBackdrop.module.css';

export interface ModalBackdropProps {
  onBackDropClick: () => void;
}

const ModalBackdrop = (props: ModalBackdropProps) => {
  return <div className={classes.backdrop} onClick={props.onBackDropClick}></div>;
};

export default ModalBackdrop;
