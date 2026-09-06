import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import linkReducer from "./features/linkSlice";
import { apiSlice } from "./apis/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    link: linkReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;