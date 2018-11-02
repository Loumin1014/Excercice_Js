var numberOne = getRandomInt(11);
var numberTwo = getRandomInt(11);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var operateur = getRandomInt(3);

// console.log("number One :" + numberOne);
// console.log("number Two :" + numberTwo);
// console.log("number operateur :" + operateur);
var result = "";
switch (operateur) {
    case 0:
        operateur = '+';
        result = numberOne + numberTwo;
        break;

    case 1:
        operateur = '-';
        result = numberOne - numberTwo;
        break;

    case 2:
        operateur = '*';
        result = numberOne * numberTwo;

        break;
}
var reponse = prompt("Combien font " + numberOne + operateur + numberTwo);
if (reponse == result) {
    alert("Bravo Bonne reponse !");
} else {

    alert("Mauvaise reponse ! la reponse est : " + result);
}