import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilters from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("");

  const saveSelectedYearHandler = (enteredYear) => {
    console.log("Fromt parent");
    setYear(enteredYear);
    console.log(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilters selected={year} onSaveYear={saveSelectedYearHandler} />
        <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
