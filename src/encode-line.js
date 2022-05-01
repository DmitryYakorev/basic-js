const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  
  
  if (!str) return '';
  let res = '';
  let count = 0;
  
  let Char = str[0];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === Char) {count++;
      continue;}
    else {
      if (count === 1) res += Char
      else {res += count + Char;
      
      count = 1;
      };
      Char = str[i];
    };
    
  };
  (count === 1)?res += Char : res += count + Char;
  return res;
}

module.exports = {
  encodeLine
};
