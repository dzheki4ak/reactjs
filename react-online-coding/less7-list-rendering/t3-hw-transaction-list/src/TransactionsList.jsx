import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(record => (
        <Transaction key={record.id} {...record} />
      ))}
    </ul>
  );
}


export default TransactionsList;
