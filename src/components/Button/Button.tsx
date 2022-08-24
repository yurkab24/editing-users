import styles from './Button.module.scss';
import { IBattonPros } from './types';

const Button = ({ text, disabled, style, onClick }: IBattonPros) => {
  return (
    <button className={styles.button} disabled={disabled} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
