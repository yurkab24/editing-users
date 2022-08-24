import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import CurrentUser from './Pages/CurrentUser';
import Main from './Pages/Main';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:id" element={<CurrentUser />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
