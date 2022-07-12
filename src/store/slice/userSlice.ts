import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { UserService } from '../../service/userService';
const initialState = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(UserService.getUser.pending, (state, action) => {
      console.log('pending');
    });
    builder.addCase(UserService.getUser.fulfilled, (state, action) => {
      console.log('fulfilled');
      console.log('UserService.getUser : ', UserService.getUser);
    });
    builder.addCase(UserService.getUser.rejected, (state, action) => {
      console.log('rejected');
    });
  },
});

export default userSlice;
