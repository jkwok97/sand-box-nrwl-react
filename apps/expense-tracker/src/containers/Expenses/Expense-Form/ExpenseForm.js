import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initialState = {
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  };

  const [enteredForm, setEnteredForm] = useState({
    ...initialState,
  });

  const titleChangeHandler = (event) => {
    setEnteredForm((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setEnteredForm((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setEnteredForm((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      ...enteredForm,
      enteredDate: new Date(enteredForm.enteredDate),
    };

    props.onSaveExpenseData(newExpenseData);

    setEnteredForm({ ...initialState });
    props.setCloseForm();
  };

  const cancelClickedHandler = (event) => {
    setEnteredForm({ ...initialState });
    props.setCloseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={enteredForm.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            placeholder="Enter Amount"
            value={enteredForm.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredForm.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelClickedHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
