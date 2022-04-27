import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    public_repos: number,
    public_gists: number,
    avatar_url: string,
    name: string,
    login: string,
    bio: string,
    followers: number,
    following: number,
    company: string,
    location: string,
    email: string
};

const initialState: UserState = {
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
    setUser: (state, action : PayloadAction<UserState>) => {
      return action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
