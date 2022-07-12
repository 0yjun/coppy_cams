import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../lib/api/client';
export const UserService = {
  getUser: createAsyncThunk(
    'user/getUser',
    async (userId: string, thunkApi) => {
      const { data } = await client.get(`/user/${userId}`);
      return data;
    },
  ),
  login: createAsyncThunk(
    'user/login',
    async (loginData, { rejectWithValue }) => {
      try {
        const response = await client.post(`/user/login`, loginData);
        console.log('response is ', response);
        return response.data.data;
      } catch (error: any) {
        console.log('response is ');
        return rejectWithValue(error.response.data);
      }
    },
  ),
};
