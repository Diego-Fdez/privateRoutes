import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models';
import {
  clearLocalStorageUser,
  persistLocalStorageUser,
} from '../../utilities';

export const EmptyUserState: UserInfo = {
  id: 0,
  name: '',
  email: '',
};

export const userKey = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorageUser<UserInfo>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorageUser<UserInfo>(userKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorageUser(userKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice;
