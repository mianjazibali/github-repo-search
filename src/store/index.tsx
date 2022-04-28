import { configureStore } from '@reduxjs/toolkit';

import userReducer from './../features/user/userSlice';
import reposReducer from './../features/repos/reposSlice';
import loadingReducer from './../features/loading/loadingSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer,
    loading: loadingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
