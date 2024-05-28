import './AddExpenseForm.css';
import { v4 as uuidv4 } from 'uuid';
import useAddExpenseFormValidation from './hooks/useAddExpenseFormValidation';
import { useExpenseContext } from '../Expenses/context/useExpenseContext';
import { addCommasToNumber, removeCommasFromNumber } from '../../utils/StringUtils';

export default function AddExpenseForm() {

    const { addExpenseItem } = useExpenseContext(); 
    const { formRefs, validateAddExpenseForm, validationErrorMessage } = useAddExpenseFormValidation();   

    const handleAmountChange = (event) => 
    {
        const amount = event.target.value;
        const amountWithoutCommas = removeCommasFromNumber(amount);
        const amountWithCommas = addCommasToNumber(amountWithoutCommas);
        formRefs.amountRef.current.value = amountWithCommas;
    }

    const submitHandler = (event) => 
    {
        event.preventDefault(); //prevent the default behavior of the form which is to send a request to the server

        const expenseData = {
            id: uuidv4(),
            title: formRefs.titleRef.current.value,
            amount: addCommasToNumber(removeCommasFromNumber(formRefs.amountRef.current.value)),
            date: new Date(formRefs.dateRef.current.value)
        };
        
        validateAddExpenseForm() && addExpenseItem(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" ref={formRefs.titleRef}  />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" ref={formRefs.amountRef} onChange={handleAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" ref={formRefs.dateRef}  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <p className='errorMessage'>{validationErrorMessage}</p>
            </div>
        </form>
    )
}