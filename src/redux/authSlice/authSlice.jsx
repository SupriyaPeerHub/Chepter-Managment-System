import { createSlice } from '@reduxjs/toolkit';

// Define initial state for authentication
const initialState = {
  showPassword: false,
  formData: { email: '', password: '' },
  rememberMe: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { toggleShowPassword, setFormData, setRememberMe } = authSlice.actions;

export default authSlice.reducer;
