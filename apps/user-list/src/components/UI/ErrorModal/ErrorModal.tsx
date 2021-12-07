import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';
import { ErrorModalProps } from './ErrorModal.props';

const Backdrop = (props: ErrorModalProps) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props: ErrorModalProps) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={styles.content}>
        <p>{props.message}</p>
      </div>

      <footer className={styles.actions}>
        <Button type="button" onClick={props.onConfirm}>
          OK
        </Button>
      </footer>
    </Card>
  );
};

const backDropRoot: Element = document.getElementById(
  'backdrop-root'
) as HTMLElement;
const overlayRoot: Element = document.getElementById(
  'overlay-root'
) as HTMLElement;

const ErrorModal = (props: ErrorModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        backDropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        overlayRoot
      )}
    </Fragment>
  );
};

export default ErrorModal;
