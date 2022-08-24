import React from 'react';
import styles from './Title.module.scss';
import { ITitleProps } from './types';

const Title = ({ text }: ITitleProps) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
