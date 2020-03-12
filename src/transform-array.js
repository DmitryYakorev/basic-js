module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    };
    let t1 = [];
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            
            case '--discard-prev': {
                if (i - 1 >= 0) {
                    t1.pop();
                }
                else {
                    t1.push(arr[i]);
                    console.log(arr[i]);

                 };
             break;
            }
            case '--discard-next': {
                if (i + 1 < arr.length) {
                    i++;
                }
                else {
                    t1.push(arr[i]);

                 };
             break;
            }

        
            case '--double-prev': {
                if (i - 1 >= 0) {
                    t1.push(arr[i - 1]); 
                };
                 /*else*/if (i - 1 < 0) {t1.push(arr[i]);
                    console.log(t1);
                    
                } 
            break;
        }
        case '--double-next': {
           // console.log('!');
            if (i + 1 < arr.length) {
                t1.push(arr[i + 1]);
            };
             /*else*/ if (i + 1 >= arr.length) {t1.push(arr[i]);
                console.log(t1);
            } 
            

            
         break;
        }
            default: {
                t1.push(arr[i]);
            }

        }
    }
   // console.log(t1);
    return t1;
};
