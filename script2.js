// Assignment Code
var generateBtn = document.querySelector("#generate");

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


function generatePassword() {

  var numeric = confirm ("Use Numbers?")
  if (numeric === true){
    userChoice = userChoice + number;
  }
  var lowerCase = confirm ("Use lower case letters?")
  if (lowerCase === true){
    userChoice = userChoice + lowerLetter;
  }

  var upperCase = confirm ("Use Upper Case Letters?")
  if (upperCase === true){
    userChoice = userChoice + capLetter;
  }

  var variable = confirm ("Use Special Characters?")
  if (variable === true){
    userChoice = userChoice + special;
  }

  var pswdLength = prompt("Password lenght must be between 8 and 128?")

  var result           = '';
  var characters       = userChoice;
  var charactersLength = characters.length;

  for ( var i = 0; i < pswdLength; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

