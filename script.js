// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
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
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
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
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to be?"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
    return null;
  }

  var includeSpecialCharacters = confirm("Click OK to include special characters in your password.");
  var includeNumericCharacters = confirm("Click OK to include numeric characters in your password.");
  var includeLowerCasedCharacters = confirm("Click OK to include lowercase characters in your password.");
  var includeUpperCasedCharacters = confirm("Click OK to include uppercase characters in your password.");

  if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCasedCharacters && !includeUpperCasedCharacters) {
    alert("At least one character type must be selected.");
    return null;

    var passwordOptions = {
      length: length,
      includeSpecialCharacters: includeSpecialCharacters,
      includeNumericCharacters: includeNumericCharacters,
      includeLowerCasedCharacters: includeLowerCasedCharacters,
      includeUpperCasedCharacters: includeUpperCasedCharacters
    };

    return passwordOptions;
}
}

// Function for getting a random element from an array
function getRandom(arr) {
 
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() { 
  var options = getPasswordOptions();
  if (!options) return "";

  var possibleCharacters = [];
  var guaranteedCharacters = [];
  
  if (options.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.includeNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.includeLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.includeUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  var remainingLength = options.length - guaranteedCharacters.length;

  for (var i = 0; i < remainingLength; i++) {
    var randomChar = getRandom(possibleCharacters);
    guaranteedCharacters.push(randomChar);
  }

  return guaranteedCharacters.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);