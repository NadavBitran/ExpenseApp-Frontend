import React from 'react';
import {useState, useEffect} from 'react';
import { getTimeFormatted, getDayFormatted, getMonthFormatted, getYearFormatted } from './utils/DateUtils';

import './DateDisplayer.css';


function DateDisplayer({className, isClock = false, dateToDisplay = new Date()}) 
{

    const [time, setTime] = useState(dateToDisplay);

    useEffect(() => {

        if(!isClock) return;

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className={`dateContainer ${className ? className : ''} ${isClock ? 'clockVer' : 'dateVer'}`}>
            <div className="date">
                <div className="date__month">{getMonthFormatted(time)}</div>
                <div className="date__year">{getYearFormatted(time)}</div>
                <div className="date__day">{getDayFormatted(time)}</div>
            </div>
           {isClock && <h3 className='time-clock'>{getTimeFormatted(time)}</h3>}
        </div>
    );
}

export default DateDisplayer;