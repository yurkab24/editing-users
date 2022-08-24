import { useState } from 'react';
import Aside from '../../components/Aside';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Title from '../../components/Title';
import styles from './CurrentUser.module.scss';

const CurrentUser = () => {
  const [activeEdit, setActiveEdit] = useState(false);

  const edit = () => {
    setActiveEdit(true);
  };

  return (
    <>
      <Aside />
      <main className={styles.main}>
        <div className={styles.box}>
          <Title text="Профиль пользоваетля" />
          <Button text="Редактироввать" onClick={edit} />
        </div>
        <Form activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
      </main>
    </>
  );
};

export default CurrentUser;
