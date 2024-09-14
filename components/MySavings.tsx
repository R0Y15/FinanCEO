'use client';

import Link from 'next/link';
import React from 'react';
import SavingsItem from './SavingsItem';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const MySavings = () => {
    const savings = useSelector((state: RootState) => state.savings.savings);

    return (
        <div className="flex flex-col w-full border max-h-[418px] h-[418px] rounded-lg p-5 dark:border-none bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="flex flex-row justify-between items-center">
                <h1 className='font-bold text-2xl'>
                    My Savings
                </h1>

                <Link href="#">
                    <p className='text-[#00B3FF] hover:cursor-pointer'>
                        View all
                    </p>
                </Link>
            </div>

            <div className='mt-10 h-72 overflow-y-auto custom-scrollbar'>
                {savings.map((item) => (
                    <SavingsItem key={item.title} title={item.title} amount={item.amount} progress={item.progress} />
                ))}
            </div>

            <div className="flex items-center justify-center">
                <Image
                    src={'/assets/slide.svg'}
                    width={24}
                    height={24}
                    alt='slide'
                    className='rotate-90'
                />
            </div>
        </div>
    );
};

export default MySavings;
