// Assignment Code
var lowerChar = ['a','b','c','d','e','f','g,','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
var numberChar = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+'];
//
// variables above will be used to generate password.
// variables below will be used to display and generate a password.
//

// Write password to the #password input
      
    function passwordOptions() {
      var length = parseInt(
        prompt("How many characters do you want your password?" , placeholder = "5-15")
      );

      if(isNaN(length) === true) {
        alert("Please enter a number for characters between 5-15");
      }

      if (length < 5){
        alert("Please enter between 5-15 characters.");
        return;
      }
      if (length > 15){
        alert("Maximum password is 15 characters");
        return;
      }

      var confirmLowerChar = confirm(
        "Would you like lower case characters in your password?"
        );
        //Added!
      }
  
      var confirmUpperChar = confirm("Would you like upper case characters in your password?");
      if(confirmUpperChar) {
        alert("Upper case characters are added into password.");
        //Added!
      }

      var confirmNumberChar = confirm("Would you like numbers in your password?");
      if(confirmNumberChar) {
      alert("Numbers will be added into password.");
        //Added!
      }

      var confirmSpecialChar = confirm("Would you like special charaters in your password?");
      if(confirmSpecialChar) {
      alert("Special characters are added into password.");
        //Added!
        return confirmSpecialChar;
      }

      if(
        confirmLowerChar === false &&
        confirmUpperChar === false &&
        confirmNumberChar === false &&
        confirmSpecialChar === false
      ) {
        alert("Please select character types for password");
      }

      var passwordGenerated = {
        length:length,
        confirmLowerChar : confirmLowerChar,
        confirmUpperChar : confirmUpperChar,
        confirmNumberChar : confirmNumberChar,
        confirmSpecialChar : confirmSpecialChar
      };

      return passwordGenerated;
    }

    function generate(arr) {
      var randomGen = Math.floor(Math.random() * arr.length);
      var randomPex = arr[randomGen];

      return randomPex;
    }

    function generatePass() {
      var confirmOptions = getPasswordConfirm();
      var result = [];

      var possibleChars = [];
      var selectedChars = [];

      if(confirmOptions.confirmLowerChar) {
        possibleChars = possibleChars.concat(lowerChar);
        selectedChars.push(getRandom(lowerChar));
      }

      if(confirmOptions.confirmUpperChar) {
        possibleChars = possibleChars.concat(upperChar);
        selectedChars.push(getRandom(upperChar));
      }

      if(confirmOptions.confirmNumberChar) {
        possibleChars = possibleChars.concat(numberChar);
        selectedChars.push(getRandom(upperChar));
      }

      if(confirmOptions.confirmSpecialChar) {
        possibleChars = possibleChars.concat(selectedChars);
        selectedChars.push(getRandom(selectedChars));
      }

      for (var i = 0; i < randomGen.length; i++) {
        var possibleChar = getRandom(possibleChars);

        result.push(possibleChar);
      }

      for (var i = 0; i < selectedChars.length; i++) {
        result[i] = selectedChars[i];
      }

      return result.join('');
    }

    var generateBtn = document.querySelector('#generate');

    function writePassword() {
      var password = generatePass();
      var passwordText = document.querySelector('#password');

      passwordText.value = password;
    }

    generateBtn.addEventListener('click', writePassword);

