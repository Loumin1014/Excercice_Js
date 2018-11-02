var demandeEmail = prompt("Votre adresse email ?");
var posAt = demandeEmail.indexOf("@"); // position du @


if (posAt != -1 && demandeEmail.length > 4) {
    // si posAt n'est pas égal à -1
    //si le string contient au moin 4 caracteres
    // si le symbole "@" n'est pas trouvé dans la chaîne de caractères, posAt est égal à -1
    alert("L'adresse email semble correcte.");
} else {
    //etape 1 alert("L'adresse email ne contient pas d'@');
    demandeEmail = prompt("Merci d'entrer une adresse email valide Qui comporte au moin 4 caracteres ! ");

}
var mdp = prompt("Entrez votre mot de passe :");
while (mdp !== "12345") {
    alert("Mot de passe erroné ! Essayez encore !  ");
    mdp = prompt("Entrez votre mot de passe :");
}
alert("Login Et mot de passe sont correctes !");