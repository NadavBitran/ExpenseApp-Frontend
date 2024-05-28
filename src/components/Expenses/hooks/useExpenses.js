import { useCallback } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

const useExpenses = (initialValue) => 
{    
    const {value: expenses, setValue: setExpenses} = useLocalStorage('expenses', initialValue);

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

    return { expenses, addExpenseItem, removeExpenseItem};
}

export default useExpenses;