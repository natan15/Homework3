var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "#"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var specialChar;
var num;
var upperCase;
var lowerCase;

document.getElementById("generate").addEventListener("click", generatePassword)

function generatePassword() {
  var confirmLength = prompt("How long would you like your password to be? It has to be between 8 and 25 Characters.");
  while (confirmLength < 8 || confirmLength > 25) {
    alert("Not okay! Password must be between 8 and 25 characters.");
    var confirmLength = prompt("How long would you like your password to be? It has to be between 8 and 25 Characters.");
  }

  var confirmSpecialChar = confirm("Click OK to include special character.");
  var confirmNum = confirm("Click OK to include number.");
  var confirmUpperCase = confirm("Click OK to include uppercase letter.");
  var confirmLowerCase = confirm("Click OK to include lowercase letter.");


var passwordChar = []
  if (confirmSpecialChar === true) {
    passwordChar = passwordChar.concat(specialChar)
  }

   if (confirmNum === true) {
    passwordChar = passwordChar.concat(num)
  }

  if (confirmUpperCase === true) {
    passwordChar = passwordChar.concat(upperCase)
  }

 if (confirmLowerCase === true) {
    passwordChar = passwordChar.concat(lowerCase)
  }

  
    
  
  console.log(passwordChar);

  var arbitraryPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    arbitraryPassword = arbitraryPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(arbitraryPassword)
  }
  alert(arbitraryPassword);

  var passwordText = document.getElementById("password");

    passwordText.value = arbitraryPassword
  }
