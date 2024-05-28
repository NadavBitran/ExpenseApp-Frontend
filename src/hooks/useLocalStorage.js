import { useState, useEffect } from 'react';
import { getStorageValue } from '../utils/LocalStorageUtils'; 

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(getStorageValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return {value, setValue};
};

export default useLocalStorage;