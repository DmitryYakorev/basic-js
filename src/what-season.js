const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!';
   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   if (date.hasOwnProperty('Date')) throw new Error('Invalid date!');
  


  if (!(date instanceof Date)) throw new Error('Invalid date!');
  
 

  let getMonth = date.getMonth() + 1;
 

  if ( getMonth > 2 && getMonth < 6) return 'spring'
   else if ( getMonth > 5 && getMonth < 9) return 'summer'
   else if ( getMonth > 8 && getMonth < 12) return 'fall'
   else return 'winter'
}

module.exports = {
  getSeason
};
