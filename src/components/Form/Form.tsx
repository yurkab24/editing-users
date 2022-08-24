import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Button from '../Button';
import FomrItem from '../FomrItem';
import styles from './Form.module.scss';
import { IFormProps } from './types';

const Form = ({ activeEdit, setActiveEdit }: IFormProps) => {
  const params = useParams();
  const userId = Number(params.id);
  const { users } = useAppSelector((state) => state.ratesReducer);
  const currentUser = users.filter((user) => user.id === userId)[0];

  const [name, setName] = useState(currentUser.name);
  const [userName, setUserName] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [street, setStreet] = useState(currentUser.address.street);
  const [city, setCity] = useState(currentUser.address.city);
  const [zipCode, setZipCode] = useState(currentUser.address.zipcode);
  const [phone, setPhone] = useState(currentUser.phone);
  const [website, setWebsite] = useState(currentUser.website);
  const [comment, setComment] = useState('');

  const [isError, setIsError] = useState(false);

  const isActive = !activeEdit;

  const submitForm = () => {
    if (isError) {
      return;
    }

    const data = {
      name,
      userName,
      email,
      street,
      city,
      zipCode,
      phone,
      website,
      comment,
    };

    const formDataJson = JSON.stringify(data);
    console.log('dataJson >> ', formDataJson);

    setActiveEdit(false);
  };

  const validateInut = (value: string) => {
    if (value.length >= 2) {
      setIsError(false);
      return true;
    }
    setIsError(true);
    return false;
  };

  return (
    <>
      <form className={styles.form}>
        <label>
          <div className={styles.name}>Name</div>
          <FomrItem
            setValue={setName}
            type="text"
            value={name}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>User name</div>
          <FomrItem
            setValue={setUserName}
            type="text"
            value={userName}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>E-mail</div>
          <FomrItem
            setValue={setEmail}
            type="text"
            value={email}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>Street</div>
          <FomrItem
            setValue={setStreet}
            type="text"
            value={street}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>City</div>
          <FomrItem
            setValue={setCity}
            type="text"
            value={city}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>Zip code</div>
          <FomrItem
            setValue={setZipCode}
            type="text"
            value={zipCode}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>Phone</div>
          <FomrItem
            setValue={setPhone}
            type="text"
            value={phone}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>Website</div>
          <FomrItem
            setValue={setWebsite}
            type="text"
            value={website}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
        <label>
          <div className={styles.name}>Comment</div>
          <FomrItem
            setValue={setComment}
            type="textarea"
            value={comment}
            readOnly={isActive}
            isValid={validateInut}
          />
        </label>
      </form>
      <Button
        text="Отправить"
        disabled={isActive}
        style={activeEdit ? { marginLeft: 'auto', background: '#52cf4f' } : { marginLeft: 'auto' }}
        onClick={submitForm}
      />
    </>
  );
};

export default Form;
