import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice/authSlice.jsx"
import { authApi } from './authSlice/authApi.jsx';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
