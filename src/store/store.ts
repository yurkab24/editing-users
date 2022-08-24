import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ratesReducer from './reducers/Users';

const rootReducers = combineReducers({
  ratesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
