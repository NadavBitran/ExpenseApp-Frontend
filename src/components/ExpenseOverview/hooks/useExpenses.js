import { useCallback, useState, useMemo } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

const useExpenses = (initialValue) => 
{    
    const {value: expenses, setValue: setExpenses } = useLocalStorage('expenses', initialValue);
    const [filteringByName, setFilteringByName] = useState(null);

    const addExpenseItem = useCallback((expenseItem) => 
        setExpenses((prevExpenses) => ({  ...prevExpenses, [expenseItem.id]: expenseItem }))
    , []);

    const removeExpenseItem = useCallback((expenseId) => 
        setExpenses((prevExpenses) => {
            const updatedExpenses = { ...prevExpenses };
            delete updatedExpenses[expenseId];
            return updatedExpenses;
        })
    , []);

    const filteredExpenses = useMemo(() => {
        if (!filteringByName) return expenses;
        return Object.keys(expenses).reduce((acc, key) => {
            if (expenses[key].title.toLowerCase().includes(filteringByName.toLowerCase())) {
                acc[key] = expenses[key];
            }
            return acc;
        }, {});
    }, [expenses, filteringByName])

    const searchExpenseItems = useCallback((expenseTitle) => 
        setFilteringByName(expenseTitle)
    , []);

    const resetExpenseItems = useCallback(() => 
        setFilteringByName(null)
    , [])

    return { expenses: filteredExpenses, addExpenseItem, removeExpenseItem, searchExpenseItems, resetExpenseItems};
}

export default useExpenses;