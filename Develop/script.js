// Assignment Code
var generateBtn = document.querySelector("#generate");
var password=document.getElementById("password");

// Write password to the #password input
function writePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8;
var password = "";

//Asks for user input
enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!enter) {
  alert("This needs a value");
} else if (enter < 8 || enter > 128) {
  // Validates user input
  // Start user input prompts
  enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
  // Continues once user input is validated
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
};

// Else if for 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat(number, alpha, alpha2);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alpha, alpha2);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};
// password variable is an array placeholder for user generated amount of length
    var password = [];

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

 document.getElementById("password").value = password;

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}
