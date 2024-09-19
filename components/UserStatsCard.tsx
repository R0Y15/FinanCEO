import { UserStatsCardProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const UserStatsCard = ({ name, value, percentage, color }: UserStatsCardProps) => {
    return (
        <>
            <div className="grid gap-4 mx-5 md:mx-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className={`flex border h-20 min-w-60 rounded-xl border-l-8 hover:bg-gray-50 cursor-pointer dark:border-gray-700 dark:bg-gray-900 text-black dark:text-white 
      ${color === 'red' ? 'border-l-red-500 dark:border-l-red-500' : ''} 
      ${color === 'blue' ? 'border-l-blue-500 dark:border-l-blue-500' : ''} 
      ${color === 'green' ? 'border-l-green-500 dark:border-l-green-500' : ''} 
      ${color === 'yellow' ? 'border-l-yellow-500 dark:border-l-yellow-500' : ''}`}>
                    <div className="flex flex-row justify-between items-center p-4 w-full">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-medium text-gray-400">{name}</h2>
                            <p className="font-bold text-2xl">${value.toLocaleString()}</p>
                        </div>

                        {percentage ? (
                            <div className="flex flex-row bg-green-200 p-1 justify-center items-center rounded-lg px-1">
                                <Image
                                    src={'/assets/up.svg'}
                                    width={18}
                                    height={18}
                                    alt="up-img"
                                />
                                <p className="text-green-500">{percentage}%</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserStatsCard