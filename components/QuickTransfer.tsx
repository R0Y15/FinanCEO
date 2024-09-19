"use client";

import Image from 'next/image';
import React, { useState } from 'react';
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
            <section className="quick-transfer-section mt-6 w-72">
                <h2 className="quick-transfer-header text-xl font-semibold mb-4">Quick Transfer</h2>
                <div className="quick-transfer-container flex flex-col items-center">
                    <div className="quick-transfer-progress flex items-center mb-4 gap-1.5">
                        <div className="progress-circle w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
                        <div className="progress-circle w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
                        <div className="progress-circle w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
                        <div className="progress-circle w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
                        <div className="progress-circle w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
                        <Image src={'/assets/slide.svg'} width={24} height={24} alt='next-slider' />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <div className="quick-transfer-input-container mb-4 w-full">
                            <label className="quick-transfer-label block text-gray-400 mb-2">Card Number</label>
                            <input type="text" className="quick-transfer-input w-full p-3 border border-gray-300 rounded-md outline-none transition-all duration-200 focus:border-[#00B2FE] dark:border-gray-700" placeholder="1234 2345 7379 9090" />
                        </div>
                        <div className="quick-transfer-buttons flex justify-between w-full">
                            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='Amount' className="w-1/2 border p-3 rounded-lg active:border-[#fff] dark:border-gray-700" />
                            <button className="send-money-btn bg-[#00B2FE] text-white font-medium p-2 rounded-md transition duration-200 hover:bg-[#3ba7d4] dark:bg-gray-800 border-none">
                                Send money
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default QuickTransfer;
