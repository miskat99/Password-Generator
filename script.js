// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

generateBtn.addEventListener("click", writePassword);

// lis tof character 
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var purenumber = "0123456789";
var spcChar = "*&^%$#@!?><{}";
var input = [""];
var randompassword = "";

function generatePassword() {
  //Function to request total length
  var passLength = prompt("Enter desired amount of characters:")

  //Checks for valid password length
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Invalid entry - Please enter a number between 8 and 128");
    return;
  }

  //Prompts user choice for lowercase/uppercase/numbers/specials...
  var lowercaseConfirm = confirm("Include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowCase.length; i++) {
      input.push(lowCase[i]);
    }
    console.log(input)
  }

  var uppercaseConfirm = confirm("Include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < uppCase.length; i++) {
      input.push(uppCase[i]);
    }
    console.log(input)
  }

  var numberConfirm = confirm("Include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < purenumber.length; i++) {
      input.push(purenumber[i]);
    }
    console.log(input)
  }

  var specialsConfirm = confirm("Include special characters?");
  if (specialsConfirm === true) {
    for (var i = 0; i < spcChar.length; i++) {
      input.push(spcChar[i]);
    }
    console.log(input)
  }

  // Forces the user to select at least one character type for their password.
  if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialsConfirm === false) {
    alert("You must chose at least 1 type of character.")
    return;
  }

  var randompassword = ""

  //Changes passLength string to intergers
  const confirmLength = parseInt(passLength)

  //compiles input choices into an array, returning random values through Math input by the length of the input array, returning password to the box
  for (var i = 0; i < confirmLength; i++) {
    randompassword += input[Math.floor(Math.random() * input.length)];
  }
  return randompassword;
}