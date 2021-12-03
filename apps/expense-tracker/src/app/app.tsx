import { useState } from 'react';

import './App.module.css';
import Expenses from '../containers/Expenses/Expenses/Expenses';
import ExpenseNew from '../containers/Expenses/Expense-New/ExpenseNew';
import { ExpenseItemDto, ExpenseAddItemDto } from '../models';

const initialExpenses = [
  {
    id: 'e1',
    expenseTitle: 'Toilet Paper',
    expenseAmount: 94.12,
    expenseDate: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    expenseTitle: 'New TV',
    expenseAmount: 799.49,
    expenseDate: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    expenseTitle: 'Car Insurance',
    expenseAmount: 294.67,
    expenseDate: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    expenseTitle: 'New Desk (Wooden)',
    expenseAmount: 450,
    expenseDate: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense: ExpenseAddItemDto) => {
    const newExpense: ExpenseItemDto = {
      ...expense,
      expenseTitle: expense.enteredTitle,
      expenseAmount: expense.enteredAmount,
      expenseDate: expense.enteredDate,
    };

    setExpenses((prevExpenses: any) => {
      return [...prevExpenses, newExpense];
    });
  };

  return (
    <div>
      <ExpenseNew onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
