module.exports = function countCats(MD_array) {
  let n = 0;
  throw 'Not implemented';
  for (i = 0;i < MD_array.length; i++){
    for (let index = 0; index < MD_array[i].length; index++) {
      if (MD_array[i][index] === '^^') {
        n++
      }
     
    }
  };
  console.log(n);
  return n
};
