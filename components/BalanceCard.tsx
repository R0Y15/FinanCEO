import React from 'react';
import Image from 'next/image';

const BalanceCard = () => {
    return (
        <>
            <div className="flex flex-col border border-gray-400 w-72 rounded-xl p-6">
                <h2 className="text-md font-semibold text-gray-500 items-start">Your Balance</h2>
                <div className="flex flex-row mt-2 justify-between">
                    <h1 className="text-lg font-bold">$128,320</h1>
                    <div className="flex flex-row justify-center items-center">
                        <Image src={'/assets/up.svg'} width={22} height={22} alt='up-image' />
                        <p className="font-medium text-green-400">23.12%</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Image src={'/assets/down.svg'} width={22} height={22} alt='down-image' className="transform scale-y-[-1]" />
                        <p className="font-medium text-red-400">23.12%</p>
                    </div>
                </div>
                <div className="border-b-2 border-gray-400 my-6"></div>
                <div className="flex flex-row mt-2 justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-md font-semibold text-gray-500 items-start">Currency</h2>
                        <h1 className="text-lg font-bold mt-2">USD/ US Dollar</h1>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-md font-semibold text-gray-500 items-start">Status</h2>
                        <h1 className="text-lg font-bold mt-2">Active</h1>
                    </div>
                </div>
            </div>
            <div className="flex bg-gray-200 w-72 justify-center items-center gap-3 p-4 rounded-xl cursor-pointer transition duration-200 hover:bg-gray-300">
                <Image src={'/assets/add.svg'} width={20} height={20} alt='add' />
                <p className="font-medium">Add Card</p>
            </div>

        </>
    );
}

export default BalanceCard;
