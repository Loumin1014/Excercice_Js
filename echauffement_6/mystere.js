var nb = Math.floor(Math.random() * 11); // nb a deviner
var cpt = 0; // nb de coups
var saisie;
var msg = 'Le nombre à deviner est compris entre 1 et 10.';

do {
    saisie = prompt(msg);
    cpt++;
    // message a afficher au prochain tour :
    if (saisie > nb)
        msg = "C'est moins";
    else
        msg = "C'est plus";
}
while (saisie != nb);

alert("Bravo, tu as gagne en " + cpt + " coups !");