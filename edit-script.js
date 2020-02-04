//Assign arrays
//Array for password of lower characters.
var lowerChar = ['a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'];
//Array for password of upper chacarcers.
var upperChar = ['A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'Y',
      'Z'];
//Array for password of numbers.
var numberChar = ['1','2','3','4','5','6','7','8','9','0'];
//Array for password of special characters.
var specialChar = ['!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '+'];
  
  // Function for password options
  function passwordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How many characters do you want for your password?', placeholder = '6-16')
    );
    //If length is empty, an alert will pop up.
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }
    //Length minimum is 5 characters.
    if (length < 5) {
      alert('Password length must be at least 6 characters');
      return;
    }
    //Length maximum is 15 characters.
    if (length > 15) {
      alert('Password length must less than 16 characters');
      return;
    }
    //When user confirms the characters will be included in password or declines confirmation then characters will not be included.
    var confirmLowerChar = confirm(
      'Submit to confirm including lowercase characters.'
    );
  
    var confrimNumChar = confirm(
      'Submit to confirm including numeric characters.'
    );
  
    var confirmSpeciChar = confirm(
      'Submit to confirm including special characters.'
    );
  
    var confirmUpperChar = confirm(
      'Submit to confirm including uppercase characters.'
    );
  
    if (
      confirmLowerChar === false &&
      confrimNumChar === false &&
      confirmSpeciChar === false &&
      confirmUpperChar === false
    ) {
      alert('Must select at least one character type');
      return;
    }
  
    var passwordOptions = {
      length: length,
      confirmLowerChar: confirmLowerChar,
      confrimNumChar: confrimNumChar,
      confirmSpeciChar: confirmSpeciChar,
      confirmUpperChar: confirmUpperChar
    };
  
    return passwordOptions;
  }

  //Function will bring the password length and the index of the password characters that were approved.
  function generateRan(arr) {
    var generateIndex = Math.floor(Math.random() * arr.length);
    var randomElmt = arr[generateIndex];
  
    return randomElmt;
  }

  function generatePassword() {
    var confirmOptions = passwordOptions();
    var result = [];
  
    var possibleChars = [];
  
    var selectedChars = [];
  
    
    if (confirmOptions.confirmLowerChar) {
      possibleChars = possibleChars.concat(lowerChar);
      selectedChars.push(generateRan(lowerChar));
    }
  
    
    if (confirmOptions.confrimNumChar) {
      possibleChars = possibleChars.concat(numberChar);
      selectedChars.push(generateRan(numberChar));
    }
  
    
    if (confirmOptions.confirmSpeciChar) {
      possibleChars = possibleChars.concat(specialChar);
      selectedChars.push(generateRan(specialChar));
    }
  
    
    if (confirmOptions.confirmUpperChar) {
      possibleChars = possibleChars.concat(upperChar);
      selectedChars.push(generateRan(upperChar));
    }
  
    for (var i = 0; i < confirmOptions.length; i++) {
      var possibleChar = generateRan(possibleChars);
  
      result.push(possibleChar);
    }
  
    for (var i = 0; i < selectedChars.length; i++) {
      result[i] = selectedChars[i];
    }
  
    return result.join('');
  }
  //Set the button into a variable for script
  var generateBtn = document.querySelector('#generate');
  //Function will bring the password in the the generate box.
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  //When button is clicked, the password will be generated.
  generateBtn.addEventListener('click', writePassword);
  
  //Results 
  //Seems the prompt and alerts appear twice, I'm not sure what's causing.
  //Arrays are to be set longated downwards, it won't work when the individual characters are right next to each other.
  //There's an error in the console. I've tried to see and locate what's happening, but it doesn't seem to affect the over all coding negatively.
  //Conculsion: Gained a better understanding for each function to break down, I will need more practice with breaking each part down in order to get the big picture.
  //And also practice more of javascript coding.