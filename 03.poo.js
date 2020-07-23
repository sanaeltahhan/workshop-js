// Fonction constructeur
function Personne(nom, prenom, pseudo) {
    this.nom = nom; 
    this.prenom = prenom;
    this.pseudo = pseudo; 

    this.getNomComplet = function() {
         return this.nom +" "+ this.prenom +" "+ this.pseudo;
    }

    this.getInitiales = function() {
        return  this.nom.charAt(0) +  this.prenom.charAt(0);
    }
}

// ajout prototype age

Personne.prototype.age = "NON RENSEIGNE";

var personne1 = new Personne ("Jules", "LEMAIRE", "jules77");

var personne2 = new Personne ("Paul", "LEMAIRE", "paul44");



function afficherPersonne (personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

// affichage Personne 1 et personne 2
console.log("Personne1 = ");
afficherPersonne(personne1);

console.log("Personne2 = ") ;
 afficherPersonne(personne2);

 console.log(personne1.pseudo="jules44");

 // affichage age
 console.log(personne1.age);
 personne1.age = 30;
 console.log(personne1.age);

// affichage initiales
 console.log(personne1.getInitiales());

 // Creation objet sans constructeur
 var personne3 = {
    nom: 'LEPREFET',
    prenom: 'Robert',
    pseudo: 'robert77' ,
    getNomComplet: function() {
        return this.nom +" "+ this.prenom +" "+ this.pseudo;
    }

}

afficherPersonne(personne3);

// CLIENT

function Client(nom, prenom, pseudo,numeroClient) {
   Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function() {
        return this.nom +" "+  this.prenom + " " + this.numeroClient;
    }

    
}

var client1 = new Client("Lucas", "Steeve", "steeve44", "A01" );

afficherPersonne(client1);
console.log(client1.numeroClient);

console.log(client1.getInfos());