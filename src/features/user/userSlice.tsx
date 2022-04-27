import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserState } from './../../types';

const initialState: IUserState = {
    public_repos: 0,
    public_gists: 0,
    avatar_url: '',
    name: '',
    login: '',
    bio: '',
    followers: 0,
    following: 0,
    company: '',
    location: '',
    email: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action : PayloadAction<IUserState>) => {
      return action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
