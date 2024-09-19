import { SavingsItemProps } from '@/types';
import React from 'react';

const SavingsItem = ({ title, amount, goal, progress }: SavingsItemProps) => {
    return (
        <div className="flex flex-col w-full justify-center gap-2 mb-4">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <span className='font-semibold'>
                        {title} &nbsp; ({progress}%)
                    </span>
                </div>
                <div>
                    <span className='font-semibold'>
                        {amount}
                    </span>
                </div>
            </div>
            <div className="relative bg-gray-100 rounded h-2 mx-2">
                <div className={`${amount >= (goal ?? 0) ? 'bg-green-500' : 'bg-[#00B3FF]'} h-2 rounded`} style={{ width: `${progress}%` }} />
            </div>
        </div>


    );
};

export default SavingsItem;