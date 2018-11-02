var prenom = prompt("Entrez votre prénom :");
if (prenom.length > 0 && prenom.length < 10) {
    alert("Bonjour, " + prenom);


} else {
    alert("Veuillez indiquer votre prenom :");
}