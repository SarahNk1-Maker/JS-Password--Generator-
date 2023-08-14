// Character arrays
var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', '_', '-', '+', '=', '<', '>', '?'];

var passwordLength = ("8"); // password Length

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Event listener for generating password
generateBtn.addEventListener("click", writePassword);

// Function to ask user for password length and character types
function getPrompts() {
  passwordArray = [];

  passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

  if (isNaN(passwordLength) && passwordLength < 8 && passwordLength > 128) {
    alert("Please enter a valid password length.");
    return false;
  }

  if (confirm("Do you want lowercase characters in your password?")) {
    passwordArray = passwordArray.concat(lowercaseChars);
  }

  if (confirm("Do you want uppercase characters in your password?")) {
    passwordArray = passwordArray.concat(uppercaseChars);
  }

  if (confirm("Do you want numeric characters in your password?")) {
    passwordArray = passwordArray.concat(numericChars);
  }

  if (confirm("Do you want special characters in your password?")) {
    passwordArray = passwordArray.concat(specialChars);
  }

  if (passwordArray.length === 0) {
    alert("To create a secure password, you must include at least one character type.");
  }
  return true;
}

// Function to generate the password
function generatePassword() {
  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    generatedPassword += passwordArray[randomIndex];
  }
  return generatedPassword;
}

// Function to display the generated password
function writePassword() {
  if (getPrompts()) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    var passwordText = document.querySelector("#password");
    passwordText.value = "";
  }
}
