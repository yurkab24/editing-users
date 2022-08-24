import { useAppSelector } from '../../hooks/redux';
import Preloader from '../Preloader';
import User from '../User/User';
import styles from './Users.module.scss';

const Users = () => {
  const { users, error, isLoading } = useAppSelector((state) => state.ratesReducer);

  return (
    <ul className={styles.users}>
      {!isLoading && !error ? (
        <Preloader />
      ) : (
        users.map((user) => {
          return (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              city={user.address.city}
              companyName={user.company.name}
            />
          );
        })
      )}
    </ul>
  );
};

export default Users;
