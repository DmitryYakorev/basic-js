module.exports = function createDreamTeam(team) {
 // throw 'Not implemented';
 if (!Array.isArray(team)) return false;
 let array = [];
 let res = '';

  for (i = 0; i < team.length; i++) {
    if (typeof team[i] != 'string') {
      continue;
    }
    array.push(team[i]
   
    .toUpperCase()
    .trim()[0]);
  };
  temp = array.sort();
  res = temp.join('');
  //console.log(temp,res);
  return res;
};