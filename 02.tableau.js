

// Creation var villes 
var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
// ############################################### forEach() ##############################
// Affichage elements du tableau villes
villes.forEach(ville => console.log(ville));

// ################################################# every() ##################################
// A l’aide de la fonction every(), déterminer si toutes les villes de la variables villes contiennent la lettre a.

const containsA = (currentValue) => currentValue.indexOf('a') > -1;

console.log("lettreADansToutesLesVilles = " + villes.every(containsA));

// ################################################### some() #####################################

// A l’aide de la fonction some(), déterminer si au moins une ville de la variables villes contient le caractère '-'.

const containsTiret = (currentValue) => currentValue.indexOf('-') > -1;

console.log("auMoinsUneVilleAvecUnTiret = " + villes.some(containsTiret));

// ##################################################### filter() ###################################

// A l’aide de la fonction filter(), créer une variable villesSansTiretSansEspace qui contient un tableau dont les villes n’ont ni tiret, ni espace.

// retourne ville contient espace
const containsEspace = currentValue => currentValue.indexOf(' ') > -1;

//Filter()
var villesSansTiretSansEspace = villes.filter((currentValue) => !containsTiret(currentValue)).filter(currentValue => !containsEspace(currentValue));

// Affichage tableau
console.log( "villesSansTiretSansEspace = " + villesSansTiretSansEspace);


//################################################### Chainer les Fonctions #########################################


var villesMajusculeSeTerminantParS = "villesMajusculeSeTerminantParS = " + villes.map(ville => ville.toUpperCase()).filter(ville => ville.endsWith('S'));

console.log(villesMajusculeSeTerminantParS);

