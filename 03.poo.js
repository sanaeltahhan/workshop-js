// Fonction constructeur
function Personne(nom, prenom, pseudo, age) {
    this.nom = nom; 
    this.prenom = prenom;
    this.pseudo = pseudo; 
    this.age = age;

    this.getNomComplet = function() {
         return this.nom +" "+ this.prenom +" "+ this.pseudo;
    }
}

// ajout prototype aga

Personne.prototype.age = "NON RENSEIGNE";

var personne1 = new Personne ("Jules", "LEMAIRE", "jules44", 30);

var personne2 = new Personne ("Paul", "LEMAIRE", "paul44");



function afficherPersonne (personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

console.log("Personne1 = ");
afficherPersonne(personne1);

console.log("Personne2 = ") ;
 afficherPersonne(personne2);

 console.log(personne1.age);
