import { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import ModalBackdrop from '../Modal-Backdrop/ModalBackdrop';
import ModalOverlay from '../Modal-Overlay/ModalOverlay';
import classes from './Modal.module.css';

export interface ModalProps {
  children: ReactElement | ReactElement[];
}

const portalElement: Element = document.getElementById(
  'overlays'
) as HTMLElement;

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
