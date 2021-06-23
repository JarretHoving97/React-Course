import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilters from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const saveSelectedYearHandler = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilters
            selected={year}
            onSaveYear={saveSelectedYearHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
