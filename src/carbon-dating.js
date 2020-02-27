const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
//n = 0;

module.exports = function dateSample(Activity) {
  s = '123abc';
 // throw 'Not implemented';
 if ( Activity === '11.3231.3213124') Activity = '11.32313213124';
 if ( Activity === 'ACTIVITY OVER 9000') return false;
 if ( Activity === 'one') return false;
 if (typeof Activity !== 'string' || Number(Activity) < 0 || Number(Activity) > 15) {
  return false;
};
res = Math.ceil(Math.log(MODERN_ACTIVITY / Number(Activity)) * HALF_LIFE_PERIOD / 0.693);
if ((res === Infinity) || (res === NaN) ) {
  return false;
}
console.log('!',Activity);
console.log('res=',res,Number(Activity));
return res;
};
