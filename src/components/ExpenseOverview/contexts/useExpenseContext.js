import React, { createContext, useContext } from 'react';
import useExpenses from '../hooks/useExpenses';
import { generateExpenseListFakeData } from '../../../utils/FakeData';

const ExpenseContext = createContext();

export const useExpenseContext = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {

    const {expenses, addExpenseItem, removeExpenseItem, resetExpenseItems, searchExpenseItems} = useExpenses(generateExpenseListFakeData());

    return (
        <ExpenseContext.Provider value={{ expenses, addExpenseItem, removeExpenseItem, resetExpenseItems, searchExpenseItems }}>
            {children}
        </ExpenseContext.Provider>
    );
};