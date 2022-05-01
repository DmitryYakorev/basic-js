const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  function notSpecial (el){
    return ( el !== '--double-next' && el !== '--double-prev' && el !== '--discard-next' && el !== '--discard-prev'); }
    if (!arr) throw Error("'arr' parameter must be an instance of the Array!");
    if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
    let res = [];
    for(let i = 0; i < arr.length;i++){
        if(typeof(arr[i])=='string'){
            switch(arr[i]){
                case '--double-next':
                    if(i < arr.length - 1 && notSpecial(arr[i+1])) {
                        res.push(arr[i+1]);
                        
                    }
                    break;
                case '--double-prev':
                    
                    if ( i > 0) res.push(arr[i-1]);
                    break;
                case '--discard-next':
                    if(i < arr.length - 1 && notSpecial(arr[i+1])) i++;
                    break;
                case '--discard-prev':
                    if (res.length > 0) res.pop();
                    
                    break;
          
                default:
                    res.push(arr[i]);
                    break;
            }
        }
        else
        {
            res.push(arr[i]);
        }
    }
    
    return res;
}

module.exports = {
  transform
};
