module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let object = {};
    let temp = Math.pow(2, disksNumber) - 1;
    //https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F
    //console.log(temp);
    object.turns = temp;
    object.seconds = temp / (turnsSpeed / 3600);
    return object;
}