const getTimeFormatted = (date) => {
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
  
    return currentTime;
}

const getDateFormatted = (date) => {

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const currentDate = `${year}-${month}-${day}`;

    return currentDate;
}

const getMonthFormatted = (date) => date.toLocaleString('en-US', { month: 'long' });
const getDayFormatted = (date) => date.toLocaleString('en-US', { day: '2-digit' });
const getYearFormatted = (date) => date.getFullYear();

export { getTimeFormatted, getDateFormatted, getMonthFormatted, getDayFormatted, getYearFormatted };