import { MySavings, SavingsForm, Transactions } from '@/components'
import React from 'react'

const page = () => {
  return (
    <section className="flex w-full 2xl:w-2/3">
      <div className='flex flex-col md:flex-row justify-between items-center gap-2 overflow-hidden md:h-[85vh] w-full mx-5'>
        <div className='flex flex-col justify-between items-center gap-2 md:gap-y-8 md:w-1/2 h-full'>
          <MySavings />
          <SavingsForm />
        </div>
        <Transactions />
      </div>
    </section>
  )
}

export default page