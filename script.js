// Assignment Code
var lowerChar = ("abcdefghijklmnopqrstuvwxyz");
var upperChar = ("ABCDEFGHIJKLMNOPQRSTUVWYZ");
var numberChar = ("1234567890");
var specialChar = ("!@#$%^&*()_+");
//
// variables above will be used to generate password.
// variables below will be used to display and generate a password.
//
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
document.getElementById("generate").onclick = function(){writePassword();};
var generatePassword = pwd.value;
userInput = "";

// Write password to the #password input
  function writePassword(){

      var confirmCharNum = prompt("How many characters do you want your password?" , placeholder = "5-15");
      userInput = ("");
      if (confirmCharNum > 4) {
        alert(confirmCharNum + " characters will be in your password");
      }
      else{
        alert("Please enter between 5-15 characters.");
        return confirmCharNum;
      }

      var confirmLowerChar = confirm("Would you like lower case characters in your password?");
      if (confirmLowerChar) {
        alert("Lower case characters are added into password.");
        //Added!
      }
      else {
        alert("Lower case characters will not be added into password");
        //Not added.
      }
  

      var confirmUpperChar = confirm("Would you like upper case characters in your password?");
      if(confirmUpperChar) {
        alert("Upper case characters are added into password.");
        //Added!
      }
      else {
        alert("Upper case characters will not be added into password.");
        //Not added.
      }
      
  
      var confirmNumberChar = confirm("Would you like numbers in your password?");
      if(confirmNumberChar) {
      alert("Numbers will be added into password.");
        //Added!
      }
      else {
        alert("Numbers will not be added into password.");
        //Not added.
      }
  
  
      var confirmSpecialChar = confirm("Would you like special charaters in your password?");
      if(confirmSpecialChar) {
      alert("Special characters are added into password.");
        //Added!
        return confirmSpecialChar;
      }
      else {
        alert("Special characers will not be added into password.");
        //Not added.
        return confirmSpecialChar;
      }

    }

  function generatePassword() {

    charset = (lowerChar.length + upperChar.length + numberChar.length + specialChar.length);
    pwd = "";
    for (var i = 0; i < 15; ++i) {
      pwd += charset.charAt(Math.floor(Math.random() * charset.length));

    }
    return pwd;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
