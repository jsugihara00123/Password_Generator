// Assignment code here
var genPassAgain = true; 
var numChar = 0;

function passwordPrompt(){

    numChar = prompt("How many characters would you like your password to be? \n Password needs to be greater than 8 and less than 128 characters");

    if (numChar > 7 && numChar < 129 && Number(numChar) !== NaN){
      var specialCharBool = confirm("Would you like to have spcial characters in your password? \n i.e. #, $, %, etc");

      var lowerCaseBool = confirm("Would you like to have lower case letters in your password?");
    
      var upperCaseBool = confirm("Would you like to have upper case letters in your password?");
    
    
      if (specialCharBool == false){
        var specailCharBool2 = "no ";
      } else {
        specailCharBool2 ="";
      }
    
      if (lowerCaseBool == false){
        var lowerCaseBool2 = "no ";
      } else {
        lowerCaseBool2 = "";
      }
    
      if (upperCaseBool == false){
        var upperCaseBool2 = "no ";
      } else {
        upperCaseBool2 = "";
      }
    
      alert ("You would like to have a password with " + numChar + " characters, " + specailCharBool2 + "special characters, " + lowerCaseBool2 + "lower case letters, and " + upperCaseBool2 + "upper case letters. \n\n Click ok to generate your password.");
    
    }else if (numChar === null){ 
      
      return;

    } else {
      passwordPrompt();
    }
  }

//funtion for generating a random password
function generatePassword() {

  var length = numChar,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
















}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
