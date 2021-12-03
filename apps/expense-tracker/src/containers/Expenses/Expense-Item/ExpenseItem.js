import "./ExpenseItem.css";
import ExpenseDate from "../Expense-Date/ExpenseDate";
import Card from "../../Shared/Card/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.expenseTitle}</h2>
        </div>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
