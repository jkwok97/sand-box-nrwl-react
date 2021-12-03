import { useState } from "react";

import "./ExpenseNew.css";

import ExpenseForm from "../Expense-Form/ExpenseForm";

const ExpenseNew = (props) => {
  const [inAddMode, setAddMode] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const buttonClickHandler = (event) => {
    setAddMode(true);
  };

  const closeFormHandler = (event) => {
    setAddMode(false);
  };

  return (
    <div className="new-expense">
      {!inAddMode && (
        <button onClick={buttonClickHandler}>Add New Expense</button>
      )}

      {inAddMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setCloseForm={closeFormHandler}
        />
      )}
    </div>
  );
};

export default ExpenseNew;
