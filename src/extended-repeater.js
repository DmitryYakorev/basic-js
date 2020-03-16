module.exports = function repeater( str, options ) {
    if(str === null) str = 'null';    
    if(str === undefined) str = '';   
    //console.log('1',str);
  str = str.toString();
    let repeatTimes = (options['repeatTimes'] !== undefined)? options.repeatTimes : 0;
    let separator = (options['separator'] !== undefined)? options.separator : '+';
    if (options['addition'] !== undefined) if (options['addition'] !== null) addition = options.addition.toString()
    else addition = 'null'
    else addition = '';
    
    
    
   
    let additionRepeatTimes = (options['additionRepeatTimes'] != undefined)? options.additionRepeatTimes : 0;
    let additionSeparator = (options['additionSeparator'] != undefined)? options.additionSeparator : '|';
    plus = addition;
  if  (additionRepeatTimes > 0)  plus = Array(additionRepeatTimes).fill(addition).join( additionSeparator); 
  if (repeatTimes > 0)  temp =  Array(repeatTimes).fill(str+plus).join(separator)
  else
  temp = str+plus;

  return temp;

};
  