import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";

export const store = configureStore({
  reducer:{
    todo:todoSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;