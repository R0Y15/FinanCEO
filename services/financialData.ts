import axios from 'axios';

const API_KEY = 'your_alpha_vantage_api_key';
const BASE_URL = 'https://www.alphavantage.co/query';

export const getExchangeRates = async (fromCurrency: string, toCurrency: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: 'CURRENCY_EXCHANGE_RATE',
        from_currency: fromCurrency,
        to_currency: toCurrency,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};
