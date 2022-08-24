import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IUsersState, IUser } from './types';
import { sortCity, sortCompany } from '../../library/utils';

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: '',
};

export const fetcUsers = createAsyncThunk('users/fetcUsers', async (_, thunkAPI) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.data)
    .catch((error: AxiosError) => thunkAPI.rejectWithValue(error.message));
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sortByCity: (state) => {
      state.users.sort(sortCity);
    },
    sortByCompany: (state) => {
      state.users.sort(sortCompany);
    },
  },
  extraReducers: {
    [fetcUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.isLoading = true;
    },
    [fetcUsers.pending.type]: (state) => {
      state.error = '';
      state.isLoading = false;
    },
    [fetcUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = true;
    },
  },
});

export default usersSlice.reducer;
