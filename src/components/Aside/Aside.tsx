import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { usersSlice } from '../../store/reducers/Users';
import Button from '../Button';
import Link from '../Link';
import styles from './Aside.module.scss';

const Aside = () => {
  const dispatch = useAppDispatch();
  const { sortByCompany, sortByCity } = usersSlice.actions;
  const { pathname } = useLocation();

  const isMainPage = pathname !== '/';

  const sortCompany = () => {
    dispatch(sortByCompany());
  };

  const sortCity = () => {
    dispatch(sortByCity());
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.filter}>
        {isMainPage ? (
          <Link text="на главную" path="/" />
        ) : (
          <>
            <div className={styles.filter__title}>Сортировка</div>
            <Button text="по городу" onClick={sortCity} />
            <Button text="по компании" onClick={sortCompany} />
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
