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
document.getElementById("generate").onclick = function(){writePassword()};

// Write password to the #password input
  function writePassword(){
    var confirmCharNum = prompt("How many characters do you want your password?" , "5-15");

    if (confirmCharNum) {
      alert( confirmCharNum + " characters will be in your password");
    }
    else{
      prompt("Please enter the number of characters for your password.");
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
      }
      else {
        alert("Special characers will not be added into password.");
        //Not added.
      }

      return writePassword;
    }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
