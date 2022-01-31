/**
 * FONCTIONS DE VÉRIFICATIONS D'UN FORMULAIRE
 */

// Vérifie que la donnée reçue ne soit pas vide
let notEmpty = function(value) {

    // Si la longueur de la châine est à zéro, c'est que celle-ci
    // est vide
    if (value.length === 0) {
        return false;
    }

    return true;

    // return value.length === 0;
}


/**
 * Verifie que la donnée contient un certain nombre de caracteres 
 */
let isLength = function(value, min) {
    // Si la chaine fait 5 caracteres ou plus, on retourne "true"
    return value.length >= Number(min);

}

/**
 * Verifie que la donnée soit une adresse email valide 
 */

let isEmail = function(value) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(value);

}


/**
 *  Verifie que les donnees reçues soient similmaires
 */
let isEqual = function(value, confirmValue) {
    return value === confirmValue;
}

/**
 * Permet d'afficher ou non, les erreurs formulaires
 */

let viewError = function(message, input, response) {
     
    let errorMessage = document.querySelector(message);
    input.style.border = "2px solid red";
    errorMessage.style.display = 'block';

    // avec un if ternaire
    // input.style.border = response ? '2px solid green' : '2px solid red';
    // errorMessage.display = response ? 'none' : 'block';

    if (response) {
        input.style.border = "2px solid green";
        errorMessage.style.display = 'none';
    }
}