module.exports = class DepthCalculator {
    calculateDepth( arr ) {
        i = 1;
        function flattenDeep(arr) {
            
            return arr.reduce((acc, val) => Array.isArray(val) ? {acc.concat(flattenDeep(val));i++;} : acc.concat(val), []);
         }
         flattenDeep(arr);
         return i
    }
};