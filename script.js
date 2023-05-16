
//Defining variables for arrays
var numbers = Array.from(Array(10).keys());
var uppercaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacters = ["$", "!", "@", "#", "%", "&", "*", "(", ")", "+", "-", "_", "<", ">", "~", "=", "/",","];

//Make letters 2 separate arrays


function getUserOptions() {
  var passwordLength = parseInt(prompt ("What is the length of your password? (Must be between 10 and 128 characters)"));

  //if statements for user inputs
  if (passwordLength < 10 || passwordLength > 128) {
    alert ("Invalid entry. Please choose a number between 10 and 128.")
    return null;
  }
  if (isNaN(passwordLength)){
    alert ("Invalid entry. Please choose a number between 10 and 128.")
    return null; 
  }
 //Confirm for each type of character
  var includeNumbersInput = confirm ("Click to confirm if you want to include numbers.");
  var includeUppercaseInput = confirm ("Click to confirm if you want to include uppercase letters.");
  var includeLowercaseInput = confirm ("Click to confirm if you want to include lowercase letters.");
  var includeSpecialCharactersInput = confirm ("Click to confirm if you want to include special characters.");

  //include each type of input for user input
  var userOptions = {
    length: passwordLength, 
    hasNumbers: includeNumbersInput,
    hasUppercase: includeUppercaseInput,
    hasLowercase: includeLowercaseInput,
    hasSpecialCharacters: includeSpecialCharactersInput
  }
  return userOptions;
}

function generatePassword() {
  var options = getUserOptions();
  var optionsArray = [];
  var myPassword = " ";

//make if statement for each type of character that they want
  if (options.hasNumbers) {
    optionsArray = optionsArray.concat(numbers);
  }
  if (options.hasUppercase) {
    optionsArray = optionsArray.concat(uppercaseLetters);
  }
  if (options.hasLowercase) {
    optionsArray = optionsArray.concat(lowercaseLetters);
  }
  if (options.hasSpecialCharacters) {
    optionsArray = optionsArray.concat(specialCharacters);
  }
  //use for loop to randomize the optionsArray
  for (var i = 0; i < options; i++) {
    optionsArray[Math.floor(Math.random()* optionsArray.length)];
    return myPassword;
  }
  //return my password\
}

function writePassword() {
  var myPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = myPassword;
  //from starter code
  return myPassword;
}


  // Add event listener to button
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);

  //Use var # = document.getElementById('#') to select the space for the final password to go in
  //Each random selection will passed into this empty array maybe?
  //finPasswordArray.push(randomSpecial(i))

 

//https://gist.github.com/bendc/1e6af8f2d8027f2965da