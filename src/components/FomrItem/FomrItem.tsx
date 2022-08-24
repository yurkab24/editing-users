import React, { useState } from 'react';
import styles from './FomrItem.module.scss';
import { IFormProps } from './types';

const FomrItem = ({ type, value, readOnly, setValue, isValid }: IFormProps) => {
  const [isError, setIsError] = useState(false);

  if (type === 'textarea') {
    return (
      <textarea
        className={styles.textarea}
        defaultValue={value}
        readOnly={readOnly}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    );
  }

  return (
    <input
      className={isError ? styles.input + ' ' + styles.error : styles.input}
      type={type}
      defaultValue={value}
      readOnly={readOnly}
      onInput={(e) => {
        if (isValid && !isValid(e.currentTarget.value)) {
          setIsError(true);
        } else {
          setIsError(false);
        }
        setValue(e.currentTarget.value);
      }}
    />
  );
};

export default FomrItem;
