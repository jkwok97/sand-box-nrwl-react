import "./ExpensesList.css";

import ExpenseItem from "../Expense-Item/ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            expenseDate={item.expenseDate}
            expenseTitle={item.expenseTitle}
            expenseAmount={item.expenseAmount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
