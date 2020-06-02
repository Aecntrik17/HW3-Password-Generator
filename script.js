// Assignment Code
var generateBtn = document.querySelector("#generate");

// Necessary variables for password selection criteria
var number = "0123456789";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@$%&#";
var userChoice = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    // creating variable for numbers selection
    var numeric = confirm ("Use Numbers?")
    // instructing code to include variable array numbers to be included in selection criteria for user choice
    if (numeric === true){
      userChoice = userChoice + number;
    }
    // creating variable for lower case alpha in the password selection criteria
    var lowerCase = confirm ("use lower case letters?")
    // instructing code to include array of lower case letters into the selection criteria if user chooses
    if (lowerCase === true){
        userChoice = userChoice + lowerLetter;
    }
    // creating variable for upper case alpha in the password selection criteria
    var upperCase = confirm("USE UPPER CASE LETTERS?")
    // instructing code to include array of upper case letters into the selection criteria if user chooses
    if (upperCase === true){
        userChoice = userChoice + capLetter;
    }
}