import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onHideCart }) => {
  return <div className={styles.backdrop} onClick={onHideCart}></div>;
};

const ModalWindown = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onHideCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindown>{children}</ModalWindown>,
        portalElement
      )}
    </>
  );
};

export default Modal;
