import {createAsyncThunk} from '@reduxjs/toolkit';
import {Network} from '@src/components/network/network';

export const getPosts = createAsyncThunk(
  'user/getPosts',
  (thunkAPI, {rejectWithValue}) => {
    Network.getUserSubreddits()
      .then(res => res)
      .catch(err => rejectWithValue(err));
  },
);
