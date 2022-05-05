// Assignment code here
var genPassAgain = true; 
var numChar = 0;
var specialCharBool
var lowerCaseBool
var upperCaseBool
var numBool

function passwordPrompt(){

    numChar = prompt("How many characters would you like your password to be? \n Password needs to be greater than 8 and less than 128 characters");

    if (numChar > 7 && numChar < 129 && Number(numChar) !== NaN){

      specialCharBool = confirm("Would you like to have spcial characters in your password? \n i.e. #, $, %, etc");

      lowerCaseBool = confirm("Would you like to have lower case letters in your password?");
    
      upperCaseBool = confirm("Would you like to have upper case letters in your password?");

      numBool = confirm("Would you like to have numbers in your password?");

      if(specialCharBool !== false && lowerCaseBool !== false && upperCaseBool !== false && numBool !== false){
        
        if (specialCharBool == false){
          var specialCharBool2 = "No ";
        } else {
          specialCharBool2 ="Yes";
        }
      
        if (lowerCaseBool == false){
          var lowerCaseBool2 = "No ";
        } else {
          lowerCaseBool2 = "Yes";
        }
      
        if (upperCaseBool == false){
          var upperCaseBool2 = "No ";
        } else {
          upperCaseBool2 = "Yes";
        }
  
        if (numBool == false){
          var numBool2 = "No ";
        } else {
          numBool2 = "Yes";
        }
      
        alert ("Here are the following selected criteria for your password:\n Special characters: " + specialCharBool2 + "\n Lower case letters: " + lowerCaseBool2 + "\n Upper case letters: " + upperCaseBool2 + "\n Numbers: "+ numBool2 + "\n\nPlease click 'Ok' to continue.");
      

      } else {
        var warningConfirm = confirm("You must select at least one of the options previously displayed to generate a password. \n\nPlease click 'Ok' to start over.")
        
        if(warningConfirm){
          
          passwordPrompt();

        } else {

          return;

        }
      }
      
    }else if (numChar === null){ 
      
      return;

    } else {
      passwordPrompt();
    }
  }

//funtion for generating a random password
function generatePassword() {
  var charSet = ""
  var charSet1 = "!@#$%&*?~";
  var charSet2 = "abcdefghijklmnopqrstuvwxyz";
  var charSet3= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charSet4 = "0123456789";
  
  if(specialCharBool){
    charSet = charSet + charSet1
  }

  if (lowerCaseBool){
    charSet = charSet + charSet2;
  }

  if (upperCaseBool){
    charSet = charSet + charSet3;
  }

  if (numBool){
    charSet = charSet + charSet4;
  }

  console.log(charSet);

  var length = numChar,
      retVal = "";
  for (var i = 0, n = charSet.length; i < length; ++i) {
      retVal += charSet.charAt(Math.floor(Math.random() * n));
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
