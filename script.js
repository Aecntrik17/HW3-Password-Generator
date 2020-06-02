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
    
}