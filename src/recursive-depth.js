module.exports = class DepthCalculator {
    calculateDepth( arr ) {
let i = 1;
         if (Array.isArray(arr)) {
            for (let el of arr) {
              if (Array.isArray(el)) {
                //t = this.calculateDepth(el) + 1;
                i = Math.max(this.calculateDepth(el) + 1,i);
               // console.log(i);
              }
            }
         return i
        } else return 0
    };
};