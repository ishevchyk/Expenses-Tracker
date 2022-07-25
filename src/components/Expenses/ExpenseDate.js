//import React from "react";
import './ExpenseDate.css';
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div className='date'>
            <div className='date__month'>{month}</div>
            <div className='date__year'>{year}</div>
            <div className='date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;