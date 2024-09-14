export const navItems = [
  {
    name: 'Overview',
    icon: '/assets/overview.svg',
    link: '/',
  },
  {
    name: 'Transaction',
    icon: '/assets/transaction.svg',
    link: '/transaction',
  },
  {
    name: 'Invoice',
    icon: '/assets/invoice.svg',
    link: '/invoice',
  },
  {
    name: 'Activity',
    icon: '/assets/activity.svg',
    link: '/activity',
  },
];

export const UserStats = [
  {
    name: 'MyBalance',
    value: 128320,
    color: 'blue',
  },
  {
    name: 'Income',
    value: 128320,
    color: 'green',
    percentage: 11.09
  },
  {
    name: 'Savings',
    value: 128320,
    color: 'yellow',
    percentage: 11.09
  },
  {
    name: 'Expense',
    value: 128320,
    color: 'red',
  },
];

export const monthlyExpenses = [
  { month: 'Jan', income: 5000, expenses: 2000 },
  { month: 'Feb', income: 5200, expenses: 4100 },
  { month: 'Mar', income: 2800, expenses: 3000 },
  { month: 'Apr', income: 1900, expenses: 1200 },
  { month: 'May', income: 5300, expenses: 3300 },
  { month: 'Jun', income: 8500, expenses: 3400 },
];

export const Mysavings = [
  { title: 'Gaming PC', amount: '$309', progress: 30 },
  { title: 'New house', amount: '$950', progress: 50 },
  { title: 'Summer trip', amount: '$550', progress: 40 },
  { title: 'Wedding', amount: '$620', progress: 60 },
  { title: 'Top up game', amount: '$170', progress: 20 },
  { title: 'Top up game', amount: '$170', progress: 20 },
  { title: 'Top up game', amount: '$170', progress: 20 },
  { title: 'Top up game', amount: '$170', progress: 20 },
];

export const Currencies = [
  { code: "USD" },
  { code: "EUR" },
  { code: "GBP" },
  { code: "INR" }
];

export const TransactionHistory = [
  {
    transactionType: "Order Revenue",
    date: "2024-09-12T10:15:30Z",
    amount: 250.75
  },
  {
    transactionType: "Withdrawal Initiated",
    date: "2024-09-11T14:22:10Z",
    amount: -150.00
  },
  {
    transactionType: "Order Revenue",
    date: "2024-09-10T09:45:00Z",
    amount: 320.50
  },
  {
    transactionType: "Withdrawal Initiated",
    date: "2024-09-09T16:30:45Z",
    amount: -200.25
  },
  {
    transactionType: "Order Revenue",
    date: "2024-09-08T12:00:00Z",
    amount: 500.00
  },
  {
    transactionType: "Withdrawal Initiated",
    date: "2024-09-07T18:15:30Z",
    amount: -75.50
  },
  {
    transactionType: "Order Revenue",
    date: "2024-09-06T11:45:20Z",
    amount: 450.30
  },
  {
    transactionType: "Withdrawal Initiated",
    date: "2024-09-05T13:10:15Z",
    amount: -300.00
  },
  {
    transactionType: "Order Revenue",
    date: "2024-09-04T15:25:40Z",
    amount: 600.75
  },
  {
    transactionType: "Withdrawal Initiated",
    date: "2024-09-03T17:50:55Z",
    amount: -125.00
  }
];

export const transactionTypes = [
  "Order Revenue",
  "Withdrawal Initiated",
];