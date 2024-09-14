"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import './quicktransfer.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { addTransaction } from '@/store/transactionsSlice';

const QuickTransfer = () => {
    const [amount, setAmount] = useState<number | undefined>();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const id = new Date().getTime(); // Generate a unique ID for each transaction
        const transactionType = 'Quick Transfer';
        const date = new Date().toISOString().split('T')[0];
        dispatch(addTransaction({ id, transactionType, date, amount: amount ?? 0 }));
        setAmount(0);
    };
    return (
        <>
            <section className="quick-transfer-section">
                <h2 className="quick-transfer-header">Quick Transfer</h2>
                <div className="quick-transfer-container">
                    <div className="quick-transfer-progress">
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <Image
                            src={'/assets/slide.svg'}
                            width={24}
                            height={24}
                            alt='next-slider'
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col w-full'
                    >
                        <div className="quick-transfer-input-container">
                            <label className="quick-transfer-label">Card Number</label>
                            <input
                                type="text"
                                className="quick-transfer-input dark:border-gray-700"
                                placeholder="1234 2345 7379 9090"
                            />
                        </div>
                        <div className="quick-transfer-buttons">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                placeholder='Amount'
                                className='w-1/2 border p-3 rounded-lg active:border-[#fff] dark:border-gray-700'
                            />
                            <button className="send-money-btn dark:bg-gray-800 border-none">
                                Send money
                            </button>
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
};

export default QuickTransfer;
