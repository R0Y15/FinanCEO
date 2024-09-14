"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { transactionTypes } from '@/utils';
import { addTransaction } from '@/store/transactionsSlice';

const TransactionsForm = () => {
    const [transactionType, setTransactionType] = useState<string>('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [amount, setAmount] = useState<number | undefined>();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const id = new Date().getTime(); // Generate a unique ID for each transaction
        dispatch(addTransaction({ id, transactionType, date, amount: amount ?? 0 }));
        setTransactionType('');
        setDate('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
            >
                <option value="" disabled>Select Transaction Type</option>
                {transactionTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                defaultValue={new Date().toISOString().split('T')[0]}
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Amount"
            />
            <button type="submit">Add Saving</button>
        </form>
    );
};

export default TransactionsForm;
