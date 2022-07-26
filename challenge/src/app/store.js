import { configureStore } from '@reduxjs/toolkit';
import textSlice from './Reducer/textSlice';

export const store = configureStore({
  reducer: {
    text:textSlice,
  },
})