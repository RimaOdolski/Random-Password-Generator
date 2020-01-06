
function generatePassword() {

  //////////////////////////////////////////////////

  var allNumbers = "0123456789";
  var allSpecial = "!@#$%^&*()_+[]{}";
  var allUpper = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
  var allLower = "abcdefghijklmnopqrstuvwxyz";
  var passwordParameters = "";
  var newPassword = "";

  ///////////////////////////////////////////////////

  var passwordLength = prompt("Choose the length of your password between 8 and 128 characters.");
  if ((parseInt(passwordLength)) >= 8 || (parseInt(passwordLength)) <= 128) {
    var userNumbers = prompt("Do you want numericals in your password?");
    if (userNumbers == true) {
      passwordParameters += allNumbers;
    }
    var userSpecial = prompt("Do you want special characters in your password?");
    if (userSpecial == true) {
      passwordParameters += allSpecial;
    }
    var userUpper = prompt("Do you want to have upper case characters in your password?");
    if (userUpper == true) {
      passwordParameters += userUpper;
    }
    var userLower = prompt("Do you want to have lower case characters in your password?");
    if (userLower == true) {
      passwordParameters += userLower;
    }

  else {
    alert("The length of the password must between 8 - 128 characters.");
  }
}
}