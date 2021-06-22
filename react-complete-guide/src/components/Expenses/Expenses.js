import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilters from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const saveSelectedYearHandler = (enteredYear) => {
    setYear(enteredYear);

    // props.onSelectedYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  //setup the content if there is any found by the filter

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilters
            selected={year}
            onSaveYear={saveSelectedYearHandler}
          />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
