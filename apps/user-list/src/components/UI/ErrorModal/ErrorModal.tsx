import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';
import { ErrorModalProps } from './ErrorModal.props';

const ErrorModal = (props: ErrorModalProps) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
