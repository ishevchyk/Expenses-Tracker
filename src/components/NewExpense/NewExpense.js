import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


const NewExpense = (props) => {
    //enteredExpenseData gonna be received from 'props.onSubmitExpenseData(expenseData)' in ExpenseForm.js
    const submitExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setExpandAdd(false)
    };
//state for expanding field for adding a new expense
    const [expandAdd, setExpandAdd] = useState(false)
    const startAdding = () => setExpandAdd(true)
    const stopAdding = () => setExpandAdd(false)

    return  (
        //value for this prop is function which will be triggered when smth happens inside this component
       // when user submit
        <div className='new-expense'>
            {!expandAdd && <button onClick={startAdding}>Add New Expense</button>}
            {expandAdd && <ExpenseForm  onSubmitExpenseData={submitExpenseDataHandler} onCancelAdding={stopAdding}/>}
        </div>
    )
};

export default NewExpense;