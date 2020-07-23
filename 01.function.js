// test fonctionnement console
//console.log("01 - Fonctions");

// ################################### Définition d’une fonction ##############################
// Initialisation variables
var nombre1 = 10;
var nombre2 = 20;

// Methode additionner 
function additionner(nb1, nb2) {
    return nb1+nb2;
}

// Créer une variable resultat1 dont le résultat est l’invocation de la fonction additionner avec les paramètres nombre1 et nombre2.
resultat1 = additionner(nombre1,nombre2);

// Affichage
console.log("resultat1 =", resultat1);

// ################################## Variable de type fonction ####################################

// Créer une variable somme dont la valeur est une référence à la fonction additionner.
var somme = additionner;

//Créer une variable resultat2 dont le résultat est l’invocation de la fonction somme avec les paramètres nombre1 et nombre2.
resultat2 = somme(nombre1,nombre2);

// Affichage
console.log("resultat2 =", resultat2);

// Methode multiplication
function multiplication(nb1, nb2) {
    return nb1 * nb2;
}

// Créer une variable multiplication dont la valeur est une fonction qui effectue la multiplication entre 2 nombres.
var multiplication = multiplication;

// Créer une variable resultat3 dont le résultat est l’invocation de la fonction multiplication avec les paramètres nombre1 et nombre2.
resultat3 = multiplication(nombre1,nombre2);

// Affichage 
console.log("resultat3 = " , resultat3);

// ################################## Fonction comme élément du 1er ordre ####################################

// Création methode afficherOperation qui renvoi un string sous la forme <nomOperation>(<nb1>, <nb2>) = <resultat invocation operation>
function afficherOperation(nomOperation,operation, nb1, nb2) {
    return nomOperation +"("+ nb1 + "," + nb2 + ") = " + operation(nb1,nb2);
}

// Affichage pour une somme
console.log(afficherOperation("Somme", somme, 20, 40));

// Affichage pour une multiplication
console.log(afficherOperation("Multiplication", multiplication, 10, 20));

// Affichage pour une soustraction
console.log(afficherOperation("Soustraction", (nb1,nb2) => { return nb1 - nb2}, 15 , 5));
