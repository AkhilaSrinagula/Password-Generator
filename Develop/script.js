var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*()";
// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = document.getElementById("characters");

// Write password to the #password input
function writePassword() {
  var characters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  var passwordLength = 8;

  var enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Continues once user input is validated
    passwordLength = enter - 1;
    var useNum = confirm("Will this contain numbers?");
    if (!useNum) {
      characters = characters.replace(/[0-9]/g, "");
    }
    var useSym = confirm("Will this contain special characters?");
    if (!useSym) {
      characters = characters.replace(/[^\w\s]/gi, "");
    }
    var useUpperCase = confirm("Will this contain Uppercase letters?");
    if (!useUpperCase) {
      characters = characters.replace(/[A-Z]/g, "");
    }
    var useLowerCase = confirm("Will this contain Lowercase letters?");
    if (!useLowerCase) {
      characters = characters.replace(/[a-z]/g, "");
    }

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * characters.length);
      password += characters.substring(randomNumber, randomNumber + 1);
    }

    if (password.length === 0) {
      alert("You must pick 1 option");
    } else {
      document.getElementById("password").value = password;
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
