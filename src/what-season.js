module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }
   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   if (date.hasOwnProperty('getMonth')) {
    throw new Error();
  }
  if (!(date instanceof Date)) {
    throw new Error();
  }
 

  let getMonth = date.getMonth() + 1;
 // console.log(getMonth);

  if ( getMonth > 2 && getMonth < 6) {
    return 'spring';
  } else if ( getMonth > 5 && getMonth < 9) {
    return 'summer';
  } else if ( getMonth > 8 && getMonth < 12) {
    return 'fall';
  } else {
    return 'winter';
  }
};
