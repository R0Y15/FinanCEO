import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionsSlice';
import savingsReducer from './savingsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    savings: savingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
