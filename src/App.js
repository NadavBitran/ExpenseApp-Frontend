import './App.css';
import AddExpenseForm from './components/AddExpenseForm/AddExpenseForm';
import DateDisplayer from './components/DateDisplayer/DateDisplayer';
import Expenses from './components/Expenses/Expenses';
import Header from './components/Header/Header';

import { ExpenseProvider } from './components/Expenses/context/useExpenseContext';

function App() 
{

  return (
    <div className='app container'>
      <Header>
        <DateDisplayer className='header-clock' isClock={true}/>
      </Header>
      <ExpenseProvider>
        <AddExpenseForm />
        <Expenses />
      </ExpenseProvider>
    </div>
  );
}

export default App;
