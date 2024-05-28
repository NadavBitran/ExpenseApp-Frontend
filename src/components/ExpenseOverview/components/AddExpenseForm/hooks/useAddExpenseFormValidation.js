import { useState, useRef, useCallback } from 'react';
import { removeCommasFromNumber } from '../../../../../utils/StringUtils';

const useAddExpenseFormValidation = () => {

    const titleRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();

    const [validationErrorMessage, setValidationErrorMessage] = useState(null);


    const validateAddExpenseForm = useCallback(() => {

        if(!titleRef.current || !amountRef.current || !dateRef.current) throw new Error('Form refs are not set');

        const title = titleRef.current.value;
        const amount = amountRef.current.value;
        const date = dateRef.current.value;

        const amountWithoutCommas = removeCommasFromNumber(amount);
    

        if(title.trim().length < 3 || title.trim().length > 20)
        {
            setValidationErrorMessage('Title should be between 3 and 20 characters');
            return false;
        }

        if(isNaN(amountWithoutCommas.trim()) || Number(amountWithoutCommas.trim()) < 0 || Number(amountWithoutCommas.trim() > 5000000))
        {
            setValidationErrorMessage('Amount should be a number between 0 and 5,000,000');
            return false;
        }

        if (date.trim().length === 0) {
            setValidationErrorMessage('Date is required');
            return false;
        }

        if (new Date(date.trim()) > new Date()) 
        {
            setValidationErrorMessage('Date should be in the past');
            return false;
        }


        resetValidationErrorMessage();
        resetFormFields();

        return true;
    }, []);


    const resetFormFields = () => 
    {
        titleRef.current.value = '';
        amountRef.current.value = '';
        dateRef.current.value = '';
    }

    const resetValidationErrorMessage = () => 
    {
        setValidationErrorMessage(null);
    }

    return {
        formRefs: {
            titleRef,
            amountRef,
            dateRef
        },
        validateAddExpenseForm,
        validationErrorMessage
    };
};

export default useAddExpenseFormValidation;