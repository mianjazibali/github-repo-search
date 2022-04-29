import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRepoState, IReposState } from './../../types';

const initialState: IReposState = {
    repos: []
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos: (state, action : PayloadAction<IRepoState[]>) => {
      state.repos = action.payload;
    }
  },
});

export const { setRepos } = reposSlice.actions;

export default reposSlice.reducer;
