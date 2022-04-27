import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISearchState } from './../../types';

const initialState: ISearchState = {
  value: ''
};

export const counterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action : PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
});

export const { setSearch } = counterSlice.actions;

export default counterSlice.reducer;
