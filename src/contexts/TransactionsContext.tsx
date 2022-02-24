import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

type Transactions = {
  id: number;
  title: string;
  category: string;
  amount: number;
  createdAt: string;
  type: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [ transactions, setTransactions ] = useState<Transactions[]>([]);
  
  function createTransaction(transaction: TransactionInput) {
		api.post('/transactions', transaction)
  }

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
