/**
 * VERIFICATION D'UN FORMULAIRE
 */

// Selectionne le champ texte du nom
let lastname = document.querySelector('#lastname');

// Applique un ecouteur d'evenement sur les changements effectues dans le champ
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event

lastname.addEventListener('input', function() {

    let response = notEmpty(this.value);
    /**
     * Argument 1 : ID de l'element DOM contenant le message d'erreur
     * Argument 2 : L'element declencheur de l'evenement
     * Argument 3 : La reponse de la verification du champ
     */
    
    viewError('#lastnameError', this, response);

});

let firstname = document.querySelector('#firstname');

// Applique un ecouteur d'evenement sur les changements effectues dans le champ
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event

firstname.addEventListener('input', function() {
    
    let response = notEmpty(this.value);

    viewError('#firstnameError', this, response);

});

    /**
    * VERIFICATION DU MOT DU PSEUDO
    */

    // Selectionne le champ texte du pseudo 
    
    let pseudo = document.querySelector('#pseudo');
    pseudo.addEventListener('input', function() {

    let response = isLength(this.value, 5);
    viewError('#pseudoError', this, response);
});    

/* var check = {}; // On met toutes nos fonctions dans un objet littéral
 
      check['Pseudo'] = function(id) {
 
        var name = document.getElementById(id),
            tooltipStyle = getTooltip(name).style;
 
        if (name.value.length >= 5) {
          name.className = 'correct';
          tooltipStyle.display = 'none';
          return true;
        } 
        else {
          name.className = 'incorrect';
          tooltipStyle.display = 'inline-block';
          return false;
        }
 
      };*/

/**
 * VERIFICATION DE L'ADRESSE EMAIL
 */      

let email = document.querySelector('#email');
email.addEventListener('input', function () {

   let response = isEmail(this.value);

   viewError('#emailError', this, response);
});

/**
 * VERIFICATION DU MOT DE PASSE
 */

// Selectionne le champ texte du mot de passe 
let password = document.querySelector('#password');
    password.addEventListener('input', function() {

    // Verifie le longueur de chaine    
    let response = isLength(this.value, 8);
    viewError('#passwordError', this, response);
}); 

/**
 *  VERIFICATION DE LA CONFIRMATION DU MOT DE PASSE
 */

let confirmPassword = document.querySelector('#confirmPassword');
confirmPassword.addEventListener('input',function() {

    let password = document.querySelector('#password');

    let response = isEqual(password.value, this.value);

    viewError('#confirmPasswordError', this, response);
});