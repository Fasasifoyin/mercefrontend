import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import profileReducer from "./slice/profile";
import vendorsReducer from "./slice/vendors";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    vendors: vendorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
