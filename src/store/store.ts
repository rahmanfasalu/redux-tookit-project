import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import breedsSlice from './slices/breedSlice';

export const store = configureStore({
  reducer: {
    breedsSlice:breedsSlice
  }, 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
