import SearchBar from '../../../SearchBar/SearchBar';
import { useExpenseContext } from '../../contexts/useExpenseContext';

const ExpensesSearch = () => {

    const { expenses, searchExpenseItems, resetExpenseItems } = useExpenseContext();

    return (
        <SearchBar entitiesFound={Object.keys(expenses).length} onDebounceSearch={searchExpenseItems} onClear={resetExpenseItems} debounceTimer={800}/>
    );
};

export default ExpensesSearch;