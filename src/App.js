import './App.css';
import DateDisplayer from './components/DateDisplayer/DateDisplayer';
import ExpenseOverview from './components/ExpenseOverview/ExpenseOverview';
import Header from './components/Header/Header';



function App() 
{

  return (
    <div className='app container'>
      <Header>
        <DateDisplayer className='header-clock' isClock={true}/>
      </Header>
      <ExpenseOverview>
        <ExpenseOverview.AddExpenseForm />
        <ExpenseOverview.ExpensesSearch />
      </ExpenseOverview>
    </div>
  );
}

export default App;
