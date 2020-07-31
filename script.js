// Password Generator will provide a password with at least 8 characters and no more than 128.

// Prompt question when "Generate Password" button is pressed.
document.querySelector("#generate").addEventListener("click", createPassword);

// Arrays for lowercase, uppercase, numeric, and/or special characters
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
const alpahbetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alpahbetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// This prompts the user for their desire length of password
function generatePassword() {
  let confirmLen = (prompt("How many characters would you like for your password?"));

  // Check that password is between 8-128 charactors
  while (confirmLen <= 7 || confirmLen >= 129) {
    alert("Password length must be between 8-128 characters, please try again.");
    confirmLen = (prompt("How many characters would you like for your password?"));
  }

  // Notify user how their length choice of their password
  alert(`You chose to have ${confirmLen} characters for your password.`);

  // User Choice on which parameters to use for password
  let confirmSpecialChar = confirm("Click OK if you would like to use special characters");
  let confirmNumberChar = confirm("Click OK if you would like to use numeric characters");
  let confirmUpperCase = confirm("Click OK if you would like to use uppercase characters");
  let confirmLowerCase = confirm("Click OK if you would like to use lowercase characters");

  //If user does not pick at least 1 parameter
  while (confirmSpecialChar === false && confirmNumberChar === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("Please chose at least one parameter for your password");
    confirmSpecialChar = confirm("Click OK if you would like to use special characters");
    confirmNumberChar = confirm("Click OK if you would like to use numeric characters");
    confirmUpperCase = confirm("Click OK if you would like to use uppercase characters");
    confirmLowerCase = confirm("Click OK if you would like to use lowercase characters");

  }


  // genearate the random characters in the choosen parameters
  let characters = [];
  let passwordChar = "";

  if (confirmSpecialChar) {
    characters[characters.length] = specialChar
  }
  if (confirmNumberChar) {
    characters[characters.length] = number
  }
  if (confirmUpperCase) {
    characters[characters.length] = alpahbetUpper
  }
  if (confirmLowerCase) {
    characters[characters.length] = alpahbetLower
  }

  for (let i = 0; i < confirmLen; i++) {
    let charType = Math.floor(Math.random() * characters.length);
    let chars = characters[charType]
    let charIndex = Math.floor(Math.random() * chars.length);
    let char = chars[charIndex];
    passwordChar = passwordChar + char
  }
  return passwordChar;

}
  function createPassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password; 
  }








