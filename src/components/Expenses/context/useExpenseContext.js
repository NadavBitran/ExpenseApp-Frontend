import React, { createContext, useContext, useState } from 'react';
import useExpenses from '../hooks/useExpenses';
import { generateExpenseListFakeData } from '../../../utils/FakeData';

const ExpenseContext = createContext();

export const useExpenseContext = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {

    const {expenses, addExpenseItem, removeExpenseItem} = useExpenses(generateExpenseListFakeData());

    return (
        <ExpenseContext.Provider value={{ expenses, addExpenseItem, removeExpenseItem }}>
            {children}
        </ExpenseContext.Provider>
    );
};