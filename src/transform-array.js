module.exports = function transform(arr) {
    
function notSpecial (el){
    return ( el !== '--double-next' && el !== '--double-prev' && el !== '--discard-next' && el !== '--discard-prev'); }
    if (!arr) throw 'undefined or null';
    if (!Array.isArray(arr)) throw 'not an array';
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
};

