import ExpenseItem from '../ExpenseItem/ExpenseItem';
import { useExpenseContext } from './context/useExpenseContext';
import './Expenses.css';

export default function Expenses() 
{
    const { expenses, removeExpenseItem } = useExpenseContext();

    const expensesKeysArray = Object.keys(expenses).reverse();
    const hasExpenses = expensesKeysArray.length > 0;
    
    return (
        <div className='expenses-list'>
            {hasExpenses ? expensesKeysArray.map((key) => (
                <ExpenseItem
                    key={key}
                    id={key}
                    title={expenses[key].title}
                    amount={expenses[key].amount}
                    date={expenses[key].date}
                    removeExpenseItem={removeExpenseItem}
                />
            )) : <h2 className='no-expenses-error'>No expenses found</h2>}
        </div>
    )
}