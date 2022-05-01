const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let res = 0;
  let array = String(n).split('');
  for (let i = 0; i < array.length; ++i) {
    array.splice(i, 1);
    if (+array.join('') > res) res = +array.join('');
    array = String(n).split('');
  }
  return res
}

module.exports = {
  deleteDigit
};
