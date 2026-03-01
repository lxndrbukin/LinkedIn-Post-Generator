import { configureStore } from '@reduxjs/toolkit';
import generator from './slices/generator';

export const store = configureStore({
  reducer: {
    generator
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./slices/types";
export * from "./slices/generator";