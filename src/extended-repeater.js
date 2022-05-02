const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let addition,plus,temp;
  if(str === null) str = 'null';    
    if(str === undefined) str = '';   
    //console.log('1',str);
  //str = str.toString(); 
  //options = options.toString();
    let repeatTimes = (options['repeatTimes'] !== undefined)? options.repeatTimes : 0;
    let separator = (options['separator'] !== undefined)? options.separator : '+';
    if (options['addition'] !== undefined) if (options['addition'] !== null) addition = options.addition
    else addition = 'null'
    else addition = '';
    
    
    
   
    let additionRepeatTimes = (options['additionRepeatTimes'] != undefined)? options.additionRepeatTimes : 0;
    let additionSeparator = (options['additionSeparator'] != undefined)? options.additionSeparator : '|';
    plus = addition;
  if  (additionRepeatTimes > 0)  plus = Array(additionRepeatTimes).fill(addition).join( additionSeparator); 
  if (repeatTimes > 0)  temp =  Array(repeatTimes).fill(String(str) + plus).join(separator)
  else
  temp = String(str) + plus;

  return temp;
}

module.exports = {
  repeater
};
