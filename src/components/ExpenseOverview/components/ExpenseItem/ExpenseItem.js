import { memo } from "react";
import "./ExpenseItem.css";
import DateDisplayer from "../../../DateDisplayer/DateDisplayer";
import Card from "../../../Card/Card";
import { capitalizeFirstLetter } from "../../../../utils/StringUtils";

const ExpenseItem = memo(({ id, title, amount, date, removeExpenseItem }) => {

    return (
        <Card className="expense-item">
            <DateDisplayer className='date-expense' dateToDisplay={new Date(date)} />
            <div className="expense-item__description">{capitalizeFirstLetter(title)}</div>
            <div className='expense-item__additionals'>
                <div className="expense-item__price">{amount}</div>
                <button className="expense-item__remove" onClick={() => removeExpenseItem(id)}>Remove</button>
            </div>
        </Card>
    )
});

export default ExpenseItem;