"use client"

import { RootState } from '@/store';
import { addAmount, addSaving } from '@/store/savingsSlice';
import { Mysavings } from '@/utils';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SavingsForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState(0);
    const [newGoal, setnewGoal] = useState(0);
    const dispatch = useDispatch();
    const savings = useSelector((state: RootState) => state.savings.savings);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(addAmount({ title, amount }));
        setTitle('');
        setAmount(0);
    };

    const handleAddSaving = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addSaving({ title: newTitle, amount: newAmount, goal: newGoal }));
        setNewTitle('');
        setNewAmount(0);
        setnewGoal(0);
    };

    return (
        <>
            <div className='flex flex-col w-full h-full p-4 border rounded-lg justify-between dark:border-none bg-white dark:bg-gray-900 text-black dark:text-white'>
                <div className="flex flex-col">
                    <h1 className='flex m-2'>
                        <p className='font-bold text-2xl'>Update Savings</p>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-row justify-between items-center m-2'>
                            <div className='w-full mr-2'>
                                <select
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
                                >
                                    <option value="" disabled>Select Savings</option>
                                    {savings.map((item, index) => (
                                        <option key={index} value={item.title}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
                                />
                            </div>
                        </div >
                        <div className='flex justify-center items-center m-2 cursor-pointer p-1.5 rounded-md bg-[#00B2FE] dark:bg-gray-800 border-none'>
                            <button
                                type='submit'
                                className='font-medium text-white'
                            >
                                Add Amount
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col">
                    <h1 className='flex mx-2'>
                        <p className='font-bold text-2xl'>Add New Savings</p>
                    </h1>
                    <form onSubmit={handleAddSaving}>
                        <div className='flex flex-row gap-2 justify-between items-center m-2'>
                            <div className='w-full'>
                                <label htmlFor="Title">Title</label>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="Amount">Saving</label>
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    value={newAmount}
                                    onChange={(e) => setNewAmount(Number(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="Goal">Goal</label>
                                <input
                                    type="number"
                                    placeholder="Goal"
                                    value={newGoal}
                                    onChange={(e) => setnewGoal(Number(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
                                />
                            </div>
                        </div>
                        <div className='flex justify-center items-center m-2 cursor-pointer p-1.5 rounded-md bg-[#00B2FE] dark:bg-gray-800 border-none'>
                            <button
                                type='submit'
                                className='font-medium text-white'
                            >
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SavingsForm;