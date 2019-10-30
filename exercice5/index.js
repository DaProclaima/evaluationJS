'use strict';




function showContent(item){
  var elem = document.createElement('div');
  elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.6;z-index:100; margin:10%;';
  elem.innerHTML =
    "<form name = 'testForm' action='' method='get' class='form-example' onsubmit=\"return validateForm()\">" +
      "<div class='form-example'>" +
        "<label for='nom'>Enter your nom: </label>" +
        "<input type='text' name='nom' id='nom' required>" +
        "<div class='error' id='nomErr'></div>"+
      "</div>" +
      "<div class='form-example'>" +
        "<label for='prenom'>Enter your prenom: </label>" +
        "<input type='text' name='prenom' id='prenom' required>" +
        "<div class='error' id='prenomErr'></div>"+
      "</div>" +
      "<div class='form-example'>" +
        "<label for='email'>Enter your email: </label>" +
        "<input type='email' name='email' id='email' required>" +
        "<div class='error' id='emailErr'></div>"+
      "</div>" +
      "<div class='form-example'>" +
        "<label for='mot de passe'>Enter your mot de passe: </label>" +
        "<input type='password' name='mot de passe' id='mot-de-passe' required>" +
        "<div class='error' id='mdpErr'></div>"+
      "</div>" +
      "<div class='form-example'>" +
        "<input type='submit' value='Send Request'>"+
      "</div>" +
    "</form>";
  document.body.appendChild(elem);
};
showContent();

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  // Retrieving the values of form elements
  var nom = document.testForm.nom.value;
  var prenom = document.testForm.prenom.value;
  var email = document.testForm.email.value;
  var mdp = document.testForm.mdp.value;

  // Defining error variables with a default value
  var nomErr = true;
  var prenomErr = true;
  var emailErr = true;
  var mdpErr = true;

  // Validate name
  if (nom == "") {
    printError("nomErr", "Veuillez entrer votre nom");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(nom) === false) {
      printError("nomErr", "Veuillez entrer un nom valide");
    } else {
      printError("nomErr", "");
      nomErr = false;
    }
  }

  if (prenom == "") {
    printError("prenomErr", "Veuillez entrer votre prénom");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(prenom) === false) {
      printError("prenomErr", "Veuillez entrer un prénom valide");
    } else {
      printError("prenomErr", "");
      prenomErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "Veuillez entrer votre email");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Veuillez entrer une adresse email valide");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (mdp == "") {
    printError("mdpErr", "Veuillez entrer un mdp");
  } else {
    var regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    if (regex.test(mdp) === false) {
      printError("mdpErr", "Veuillez entrer un mot de passe avec au moins 6 charactères, 1 maj, 1 minuscule, 1 chiffre");
    } else {
      printError("mdpErr", "");
      mdpErr = false;
    }
  }


  // Prevent the form from being submitted if there are any errors
  if ((nomErr || prenomErr || emailErr || mdpErr) == true) {
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview = "Vous avez renseigné ceci: \n" +
      "Nom: " + nom + "\n" +
      "Prenom: " + prenom + "\n" +
      "Adresse email: " + email + "\n"+
      "Mot de passe: " + mdp;


  }
}


