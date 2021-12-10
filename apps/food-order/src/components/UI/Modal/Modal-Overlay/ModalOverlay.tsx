import { ReactElement } from 'react';
import classes from './ModalOverlay.module.css';

export interface ModalOverlayProps {
  children: ReactElement | ReactElement[];
}

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
