// @ts-nocheck
"use client"

import { RootState } from '@/store';
import { monthlyExpenses } from '@/utils';
import { Checkbox, FormControl, MenuItem, Select } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const chart = () => {
    const [showIncome, setShowIncome] = useState<boolean>(true);
    const [showExpenses, setShowExpenses] = useState<boolean>(false);

    return (
        <>
            <div className='flex justify-between items-center border rounded-xl p-5 max-h-[418px] h-[418px] max-w-[686px] dark:border-none bg-white dark:bg-gray-900 text-black dark:text-white'>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center p-3">
                        <h1 className='font-bold text-2xl'>Money flow</h1>

                        <div className="flex flex-row gap-2">
                            <div className="flex justify-between items-center">
                                <Checkbox
                                    // defaultChecked={showIncome}
                                    checked={showIncome}
                                    sx={{
                                        color: '#00B3FF',
                                        '&.Mui-checked': {
                                            color: '#00B3FF',
                                        },
                                    }}
                                    onClick={() => {
                                        setShowIncome(!showIncome);
                                        setShowExpenses(!showExpenses);
                                    }}
                                />
                                <p className='text-gray-400'>Inc</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Checkbox
                                    // defaultChecked={showExpenses}
                                    checked={showExpenses}
                                    sx={{
                                        color: '#FF5733',
                                        '&.Mui-checked': {
                                            color: '#FF5733',
                                        },
                                    }}
                                    onClick={() => {
                                        setShowExpenses(!showExpenses);
                                        setShowIncome(!showIncome);
                                    }}
                                />
                                <p className='text-gray-400'>Exp</p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-1 border px-2 py-0 rounded-xl w-40 dark:border-gray-700">
                                <Image
                                    src={'/assets/cal.svg'}
                                    width={24}
                                    height={24}
                                    alt='cal'
                                />
                                <FormControl fullWidth sx={{ border: 'none', boxShadow: 'none', textAlign: 'left' }}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={monthlyExpenses[0].month}
                                        //   onChange={handleChange}
                                        IconComponent={() => (
                                            <Image
                                                src="/assets/slide.svg"
                                                width={24}
                                                height={24}
                                                alt="custom arrow"
                                                className='rotate-90'
                                            />
                                        )}
                                        className='text-gray-400 dark:focus:border-[#00B3FF] focus:border-[#00B3FF]'
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                        }}
                                    >
                                        {monthlyExpenses.map((item, idx) => (
                                            <MenuItem key={idx} value={item.month}>{item.month}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40rem] h-[20rem]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={monthlyExpenses}
                                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            >
                                <YAxis axisLine={false} tickLine={false} />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} />

                                <Legend />
                                <Tooltip />

                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00B3FF" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#00B3FF" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#FF5733" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#FFC300" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                {showIncome ? (
                                    <Area
                                        type='monotone'
                                        dataKey='income'
                                        stroke='#00B3FF'
                                        fill='url(#colorIncome)'
                                    />
                                ) : null}
                                {showExpenses ? (
                                    <Area
                                        type='monotone'
                                        dataKey='expenses'
                                        stroke='#FF5733'
                                        fill='url(#colorExpenses)'
                                    />
                                ) : null}
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div >
            </div>
        </>
    )
}

export default chart