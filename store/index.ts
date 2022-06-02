import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";
import { useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    user: userReducer,
  },
});

export default store;

export const wrapper = createWrapper(() => store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
