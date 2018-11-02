function affiche_prompt() {
    var i = 0;
    var somme = 0; //declarer une variable pour garder la somme des nombres
    do {
        var nombre = prompt("Entrez un nombre entre 0 et 20 ");
        somme += parseInt(nombre); //la somme des nombres
        i++;

        document.write("Nombre: " + nombre);
        document.write("<br>");

    }
    while (i < 10);

    document.write('La moyenne du Score  : ' + somme / i); //utiliser la somme des nombre divisé par i
}
affiche_prompt();