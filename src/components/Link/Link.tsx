import { NavLink } from 'react-router-dom';
import styles from './Link.module.scss';
import { ILinkProps } from './types';

const Link = ({ text, path, style }: ILinkProps) => {
  return (
    <NavLink className={styles.link} to={path} style={style}>
      {text}
    </NavLink>
  );
};

export default Link;
