// Fonction constructeur
function Personne(nom, prenom, pseudo) {
    this.nom = nom; 
    this.prenom = prenom;
    this.pseudo = pseudo; 

    this.getNomComplet = function() {
         return this.nom +" "+ this.prenom +" "+ this.pseudo;
    }
}

var personne1 = new Personne ("Jules", "LEMAIRE", "jules44");

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