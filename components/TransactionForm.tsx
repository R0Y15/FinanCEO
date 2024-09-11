import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, MenuItem, Card, CardContent, Typography } from '@mui/material';
import { addTransaction } from '@/store/transactionsSlice';

const TransactionForm: React.FC = () => {
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTransaction({ id: Date.now().toString(), type, amount, description }));
    setType('income');
    setAmount(0);
    setDescription('');
  };

  return (
    <Card style={{ maxWidth: 400, margin: 'auto', padding: '20px 5px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Add Transaction
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            select
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value as 'income' | 'expense')}
            fullWidth
            margin="normal"
          >
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </TextField>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TransactionForm;
