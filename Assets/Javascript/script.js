//Generate password function
function generatePassword() {

  var allNumbers = "0123456789";
  var allSpecial = "!@#$%^&*()_+[]{}";
  var allUpper = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
  var allLower = "abcdefghijklmnopqrstuvwxyz";
  var passwordParameters = "";
  var newPassword = "";

  var passwordLength = prompt("Choose the length of your password between 8 and 128 characters.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var userNumbers = confirm("Do you want numericals in your password?");
    if (userNumbers == true) {
      passwordParameters += allNumbers;
    }
    var userSpecial = confirm("Do you want special characters in your password?");
    if (userSpecial == true) {
      passwordParameters += allSpecial;
    }
    var userUpper = confirm("Do you want to have upper case characters in your password?");
    if (userUpper == true) {
      passwordParameters += allUpper;
    }
    var userLower = confirm("Do you want to have lower case characters in your password?");
    if (userLower == true) {
      passwordParameters += allLower;
    }
    if (passwordParameters != "") {
      for (let counter = 0; counter < passwordLength; counter++) {
      newPassword += passwordParameters[Math.floor(Math.random() * passwordParameters.length)];
      }
    } else {
      alert("You need to select at least one character type.")
    }

    document.getElementById("password").innerHTML = newPassword;
  } else {
    alert("The length of the password must between 8 - 128 characters.")
  }
   
}
// Create copy to clipboard
function copyToClipboard() {
  var copyText = document.getElementById("password");
  if (copyText.value == "") {
    alert("There is no password to copy.");
  }
  else {
    copyText.select();
    document.execCommand("copy");
    alert("Copied Password: " + copyText.value); 
  }
} 