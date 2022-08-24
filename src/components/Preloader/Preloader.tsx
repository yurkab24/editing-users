import styles from './Preloader.module.scss';
import preloader from '../../assets/img/preloader.svg';

function Preloader() {
  return (
    <div className={styles.preloader}>
      <img className={styles.preloader__img} src={preloader} alt="preloader" />
    </div>
  );
}

export default Preloader;
