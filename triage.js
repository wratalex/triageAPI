/**
 * Trie un tableau d'objets en fonction d'une propriété spécifiée.
 *
 * @param {Array} tableau - Le tableau d'objets à trier.
 * @param {string} propriete - La propriété de l'objet sur laquelle effectuer le tri.
 * @param {boolean} croissant - Si vrai, le tri est effectué en ordre croissant. Si faux, le tri est effectué en ordre décroissant.
 *
 * @return {Array} Le tableau d'objets trié.
 */
function trierObjets(tableau, propriete, croissant) {
    return tableau.sort((a, b) => {
        if (a[propriete] < b[propriete]) {
            if (croissant) {
                return -1;
            } else {
                return 1;
            }
        }
        if (a[propriete] > b[propriete]) {
            if (croissant) {
                return 1;
            } else {
                return -1;
            }
        }
        return 0;
    });
}

let donnees = [
    { nom: 'John', age: 30, id: 3 },
    { nom: 'Jane', age: 20, id: 1 },
    { nom: 'Doe', age: 25, id: 2 }
];

console.log("Tri par âge en ordre croissant");
console.log(trierObjets(donnees, 'age', true));

console.log("Tri par nom en ordre décroissant");
console.log(trierObjets(donnees, 'nom', false));

console.log("Tri par id en ordre croissant");
console.log(trierObjets(donnees, 'id', true));