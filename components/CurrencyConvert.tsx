"use client"

import { useState, useEffect } from 'react';
import { Currencies } from '@/utils'
import axios from 'axios';

const CurrencyConvert = () => {

  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios.get(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/latest/${fromCurrency}`)
        .then(response => {
          const rate = response.data.conversion_rates[toCurrency];
          setExchangeRate(rate);
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (amount !== undefined) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [amount, exchangeRate]);

  return (
    <div className="w-[500px] h-52 border rounded-xl p-5 dark:border-none bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col items-start justify-between">
        <h1 className='text-2xl font-bold'>Currency</h1>

        <div className="flex flex-row justify-between items-center w-full gap-2 mt-5">
          <div className="w-1/2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
              placeholder="Enter Amount"
            />
          </div>
          <div className="w-1/4">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
            >
              {Currencies.map((currency, idx) => (
                <option key={idx} value={currency.code}>{currency.code}</option>
              ))}
            </select>
          </div>

          <span>to</span>

          <div className="w-1/4">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 hover:border-[#00B3FF] focus:border-[#00B3FF] dark:focus:border-[#00B3FF] dark:border-gray-700"
            >
              {Currencies.map((currency, idx) => (
                <option key={idx} value={currency.code}>{currency.code}</option>
              ))}
            </select>
          </div>
        </div>


        <div className='flex justify-center items-center my-5'>
          <h3 className='font-medium text-lg'>Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}</h3>
        </div>


        {/* Additional Componenet */}
        {/* <h1 className='text-2xl font-bold mt-2'>All Expenses</h1>

        <div className="flex flex-row items-center justify-between w-full gap-5 h-10 my-5">
          <div className="flex flex-col hover:border-b-4 transition-all duration-100 w-20 cursor-pointer">
            <h2 className='text-md text-gray-400'>Daily</h2>
            <p className='font-bold text-lg'>$324</p>
          </div>

          <div className="flex flex-col hover:border-b-4 transition-all duration-100 w-20 cursor-pointer">
            <h2 className='text-md text-gray-400'>Weekly</h2>
            <p className='font-bold text-lg'>$3,327</p>
          </div>

          <div className="flex flex-col hover:border-b-4 transition-all duration-100 w-20 cursor-pointer">
            <h2 className='text-md text-gray-400'>Monthly</h2>
            <p className='font-bold text-lg'>$12,131</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default CurrencyConvert