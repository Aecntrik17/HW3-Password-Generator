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
     // creating variable for special characters in the password selection criteria
    var specialEl = confirm("Use $pecia! Ch@racters?")
    // instructing code to include array of special characters into the selection criteria if user chooses
    if (specialEl === true){
        userChoice = userChoice + special;
    }
    // Creating variable for password length, value will be store with user responds to prompt 
    var pswdLength = prompt("Password length? Must be between 8 and 128.")

    // creating variables for running code and accessing the selection criteria
    var result = '';
    var characters = userChoice;
    var charactersLength = characters.length;
    // looping the selection critera based on user input, and generating random selections
    for (var i = 0; i <pswdLength; i++){
        result += characters.charAt(Math.floor(math.random() * charactersLength));
    }
    // returns the result of the loop
    return result;
}