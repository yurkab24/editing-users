import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from './types';

import styles from './User.module.scss';

const User = ({ id, name, city, companyName }: IUser) => {
  return (
    <li className={styles.user}>
      <div>
        <span>ФИО:</span> <span>{name}</span>
      </div>
      <div>
        <span>город:</span> <span>{city}</span>
      </div>
      <div>
        <span>компания:</span> <span>{companyName}</span>
      </div>

      <Link key={1} to={`user/${id}`}>
        Подробнее
      </Link>
    </li>
  );
};

export default User;
