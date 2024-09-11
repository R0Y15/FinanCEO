import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '@/store/transactionsSlice';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootState } from '@/store';

const TransactionList: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const dispatch = useDispatch();

  return (
    <List>
      {transactions.map((transaction) => (
        <ListItem key={transaction.id}>
          <ListItemText
            primary={`${transaction.type}: ${transaction.amount}`}
            secondary={transaction.description}
          />
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTransaction(transaction.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;
