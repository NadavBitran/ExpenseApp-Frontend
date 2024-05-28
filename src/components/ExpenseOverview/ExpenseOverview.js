import React from 'react';
import AddExpenseForm from './components/AddExpenseForm/AddExpenseForm';
import ExpensesSearch from './components/ExpensesSearch/ExpensesSearch';
import Expenses from './components/Expenses/Expenses';
import { ExpenseProvider } from './contexts/useExpenseContext';

const ExpenseOverview = ({children}) => {
    return (
        <ExpenseProvider>
            {children}
            <Expenses />
        </ExpenseProvider>
    );
};

ExpenseOverview.AddExpenseForm = AddExpenseForm;
ExpenseOverview.ExpensesSearch = ExpensesSearch;

export default ExpenseOverview;