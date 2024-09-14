import { MySavings, SavingsForm, Transactions } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-2 overflow-hidden md:h-[85vh] w-full 2xl:w-3/4'>
      <div className='flex flex-col justify-between items-center gap-2 md:gap-y-8 md:w-1/2 h-full'>
        <MySavings />
        <SavingsForm />
      </div>
      <Transactions />
    </div>

  )
}

export default page