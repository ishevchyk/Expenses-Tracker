import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";


const INITIAL_EXPENSES = [
  {id: 'e1', title: 'Toilet Paper',
    amount: 104.12, date: new Date(2022, 7, 14)},
  { id: 'e2', title: 'New TV',
    amount: 799.49, date: new Date(2021, 2, 12) },
  {id: 'e3', title: 'Car Insurance',
    amount: 293.87, date: new Date(2019, 2, 28),},
  {id: 'e4', title: 'New Desk (Wooden)',
    amount: 450, date: new Date(2022, 5, 12),}
]
// return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'Lets get started!'),
//     React.createElement(Expenses, {items: expenses})
// );
const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })

  }
  return (
      <div>
        {/*<h2>Lets get started!</h2>*/}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
  );
}

export default App;
