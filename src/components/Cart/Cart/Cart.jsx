import { useContext } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartContext from '../../../store/cart-context';
import CartItem from '../CartItem/CartItem';

const Cart = ({ onHideCart }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = id => {};
  const addCartItemHandler = item => {};

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
