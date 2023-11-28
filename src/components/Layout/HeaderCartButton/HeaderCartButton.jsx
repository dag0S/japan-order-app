import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce(
    (currentValue, item) => currentValue + item.amount,
    0
  );

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ''
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setIsButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
