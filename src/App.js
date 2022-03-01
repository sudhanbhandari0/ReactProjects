import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: "e2",
        title: "Car Insurane",
        amount: 924.12,
        date: new Date(2020, 8, 14)
    },
    {
        id: "e3",
        title: "New TV",
        amount: 194.12,
        date: new Date(2020, 7, 21)
    },
    {
        id: "e4",
        title: "Rent",
        amount: 394.12,
        date: new Date(2020, 6, 14)
    }

]


const App = () => {

    const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
    
    const addExpenseHandler = expense => {
       setExpenses((prevExpenses) => {
           return [expense, ...prevExpenses];
       })
    }

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses items ={expenses} />
        </div>
    );
}

export default App;