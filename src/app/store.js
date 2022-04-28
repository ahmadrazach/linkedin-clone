import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";

//configureStore API from Redux Toolkit
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
