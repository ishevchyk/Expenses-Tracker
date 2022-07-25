import {useState} from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   // const [userInput, setUserInput] = useState({
   //      enteredTitle: '',
   //      enteredAmount: '',
   //      enteredDate: ''
   //  })
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
        //we depend on previous state, so need to copy all values
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        //will be automatically executed, will receive previous state snapshot(like when we need prev state, example: counter)
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // }); 
    }
    const amountChangeHandler = event => {
      setEnteredAmount(event.target.value);
      //   setUserInput({
      //       ...userInput,
      //       enteredAmount: event.target.value,
      //   })
    }
    const dateChangeHandler = event => {
       setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
    
    const submitHandler = (event) => {
        //prevent reload on submit(no sending request)
      event.preventDefault();
      const expenseData = {
          title: enteredTitle,
          amount: +enteredAmount,
          date: new Date(enteredDate)
      };
      props.onSubmitExpenseData(expenseData);
      //empty inputs after submit
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__inputs">
                <div className="new-expense__input">
                    <label>Title</label>
                    <input type="text"
                           value={enteredTitle}
                           onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__input">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01'
                           value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__input">
                    <label>Date</label>
                    <input type="date" min='2018-01-01' max='2023-12-31'
                           value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelAdding}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};
export default ExpenseForm;