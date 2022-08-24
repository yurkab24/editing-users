import { useEffect } from 'react';
import Aside from '../../components/Aside';
import Title from '../../components/Title';
import Users from '../../components/Users';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetcUsers } from '../../store/reducers/Users';
import styles from './Main.module.scss';

const Main = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.ratesReducer);

  useEffect(() => {
    dispatch(fetcUsers());
  }, []);

  return (
    <>
      <Aside />
      <main className={styles.main}>
        <Title text="Список пользователей" />
        <Users />
        {error && error}
      </main>
    </>
  );
};

export default Main;
