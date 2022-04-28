import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoadingState } from './../../types';

const initialState: ILoadingState = {
    value: false
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action : PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
