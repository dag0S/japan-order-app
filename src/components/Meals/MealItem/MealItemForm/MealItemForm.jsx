import styles from './MealItemForm.module.css';
import Input from '../../../UI/Input/Input';
import { useRef, useState } from 'react';

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количесвто"
        input={{
          id: id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Пожалуйста введите количесвто от 1 до 10</p>}
    </form>
  );
};

export default MealItemForm;
