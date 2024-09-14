// savingsSlice.ts
import { Saving } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SavingsState {
    savings: Saving[];
}

const initialState: SavingsState = {
    savings: [
        { title: 'Gaming PC', amount: 309, goal: 1000, progress: 30 },
        { title: 'New house', amount: 950, goal: 1900, progress: 50 },
        { title: 'Summer trip', amount: 550, goal: 1375, progress: 40 },
        { title: 'Wedding', amount: 620, goal: 1033, progress: 60 },
        { title: 'Top up game', amount: 170, goal: 850, progress: 20 },
    ],
};

const savingsSlice = createSlice({
    name: 'savings',
    initialState,
    reducers: {
        addAmount: (state, action: PayloadAction<{ title: string; amount: number }>) => {
            const { title, amount } = action.payload;
            const saving = state.savings.find((s) => s.title === title);
            if (saving) {
                saving.amount += amount;
                saving.progress = Math.min(100, (saving.amount / saving.goal) * 100);
            }
        },
        addSaving: (state, action: PayloadAction<{ title: string; amount: number; goal: number }>) => {
            const { title, amount, goal } = action.payload;
            state.savings.unshift({
                title,
                amount,
                goal,
                progress: Math.min(100, (amount / goal) * 100),
            });
        },
    },
});

export const { addAmount, addSaving } = savingsSlice.actions;
export default savingsSlice.reducer;
