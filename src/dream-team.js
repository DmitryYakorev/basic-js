module.exports = function createDreamTeam(team) {
 // throw 'Not implemented';
 if (!Array.isArray(team)) return false;
 let array = [];

  for (i = 0; i < team.length; i++) {
    if (typeof team[i] != 'string') {
      continue;
    }
    array.push(team[i]
   
    .toUpperCase()
    .trim());
  }
};