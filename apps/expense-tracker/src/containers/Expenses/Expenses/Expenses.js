import { useState } from "react";

import "./Expenses.css";
import Card from "../../Shared/Card/Card";
import ExpenseFilter from "../Expense-Filter/ExpenseFilter";
import ExpensesList from "../Expenses-List/ExpensesList";
import ExpenseChart from "../Expense-Chart/ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.expenseDate.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectChange={selectChangeHandler}
        selectedYear={selectedYear}
      />

      <ExpenseChart expenses={filteredExpenses} />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
