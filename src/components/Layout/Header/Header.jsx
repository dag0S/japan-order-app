import styles from './Header.module.css';
import sushiImg from '../../../assets/sushi.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImg} alt="Суши" />
      </div>
    </>
  );
};

export default Header;
