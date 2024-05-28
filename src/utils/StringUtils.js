const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const addCommasToNumber = (number) => {
    const numberWithCommas = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberWithCommas;
}

const removeCommasFromNumber = (number) => {
    const numberWithoutCommas = number.replace(/,/g, '');
    return numberWithoutCommas;
}

export { capitalizeFirstLetter, addCommasToNumber, removeCommasFromNumber };
