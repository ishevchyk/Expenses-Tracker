import React, { useState } from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022')
    const saveSelectedYear = year => {
        setSelectedYear(year)
    }
    const filteredExpenses = props.items.filter(filteredYear => filteredYear.date.getFullYear().toString() === selectedYear)
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onSelectedYear={saveSelectedYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/*{filteredExpenses.length === 0 ? (*/}
                {/*    <p>No expenses found!</p>*/}
                {/*) : filteredExpenses.map(item => (*/}
                {/*    <ExpenseItem*/}
                {/*        key={item.id}*/}
                {/*        title={item.title}*/}
                {/*        amount={item.amount}*/}
                {/*        date={item.date}*/}
                {/*    />*/}
                {/*))}*/}
            </Card>
        </div>
    )
}
export default Expenses;