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
var writePassword = generatePassword;

// Write password to the #password input
function generatePassword() {

  criteriaForPassword();
  //Confirm criteria for password.
  var confirmCharNum = prompt("How many characters do you want your password?" , "5-15");

  if (confirmCharNum) {
    alert( confirmCharNum + " characters will be in your passwrod");
  }
  else{
    prompt("Please enter the number of characters for your password.");
  }

  function criteriaForPassword(){
    //lowercase characters
    generateBtn = confirmLowerChar;
    for (var i = 0; i < 15 && i > 5; i++) {
    var lowerCaseCharacters = lowerChar.value.split(lowerChar.length);
    var randomLower = Math.floor(Math.random()*lowerCaseCharacters.length);
    var confirmLowerChar = confirm("Would you like lower case characters in your password?");

      if (confirmLowerChar) {
        alert("Lower case characters are added into password.");
        //Added!
      }
      else {
        alert("Lower case characters will not be added into password");
        //Not added.
      }}

    //upercase characters
    var upperCaseCharacters = upperChar.value.split("");
    var randomUpper = Math.floor(Math.random()*upperCaseCharacters.length);
    document.getElementsById("password").randomUpper.textContent = upperCaseCharacters;
    var confirmUpperChar = confirm("Would you like upper case characters in your password?");

      if(confirmUpperChar) {
        alert("Upper case characters are added into password.");
        //Added!
      }
      else {
        alert("Upper case characters will not be added into password.");
        //Not added.
      }

    //number characters
    var numberCharacters = numberChar.value.split("");
    var randomNum = Math.floor(Math.random()*numberCharacters.length);
    var confirmNumberChar = confirm("Would you like numbers in your password?");

      if(confirmNumberChar) {
      alert("Numbers will be added into password.");
        //Added!
      }
      else {
        alert("Numbers will not be added into password.");
        //Not added.
      }

    //special characters
    var specialCharacters = specialChar.value.split("");
    var randomSpec = Math.floor(Math.random()*specialCharacters.length);
    var confirmSpecialChar = confirm("Would you like special charaters in your password?");

      if(confirmSpecialChar) {
      alert("Special characters are added into password.");
        //Added!
      }
      else {
        alert("Special characers will not be added into password.");
        //Not added.
      }

  }}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
