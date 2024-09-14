import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
    id: number;
    transactionType: string;
    date: string;
    amount: number;
}

interface TransactionsState {
    transactions: Transaction[];
}

// Default transactions
export const TransactionHistory: Transaction[] = [
    { id: 1, transactionType: "Order Revenue", date: "2024-09-12T10:15:30Z", amount: 250.75 },
    { id: 2, transactionType: "Withdrawal Initiated", date: "2024-09-11T14:22:10Z", amount: -150.00 },
    { id: 3, transactionType: "Order Revenue", date: "2024-09-10T09:45:00Z", amount: 320.50 },
    { id: 4, transactionType: "Withdrawal Initiated", date: "2024-09-09T16:30:45Z", amount: -200.25 },
    { id: 5, transactionType: "Order Revenue", date: "2024-09-08T12:00:00Z", amount: 500.00 },
    { id: 6, transactionType: "Withdrawal Initiated", date: "2024-09-07T18:15:30Z", amount: -75.50 },
    { id: 7, transactionType: "Order Revenue", date: "2024-09-06T11:45:20Z", amount: 450.30 },
    { id: 8, transactionType: "Withdrawal Initiated", date: "2024-09-05T13:10:15Z", amount: -300.00 },
    { id: 9, transactionType: "Order Revenue", date: "2024-09-04T15:25:40Z", amount: 600.75 },
    { id: 10, transactionType: "Withdrawal Initiated", date: "2024-09-03T17:50:55Z", amount: -125.00 }
];

const initialState: TransactionsState = {
    transactions: TransactionHistory,
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactions.unshift(action.payload); // Add new transaction to the top
        },
    },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
