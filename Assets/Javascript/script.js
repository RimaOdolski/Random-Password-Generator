// Create generate password function
function generatePassword() {

  // Creating password parameter library
  var allNumbers = "0123456789";
  var allSpecial = "!@#$%^&*()_+[]{}";
  var allUpper = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
  var allLower = "abcdefghijklmnopqrstuvwxyz";
  var passwordParameters = ""; // Start off the parameters as blank
  var newPassword = ""; // Initialize password as blank

  var passwordLength = prompt("Choose the length of your password between 8 and 128 characters.");
  if (passwordLength >= 8 && passwordLength <= 128) { // Only proceed if the length meets the minimum and maximum required
    var userNumbers = confirm("Do you want numericals in your password?");
    if (userNumbers == true) {
      passwordParameters += allNumbers; // Add all numbers to the library
    }
    var userSpecial = confirm("Do you want special characters in your password?");
    if (userSpecial == true) {
      passwordParameters += allSpecial; // Add all special characters to the library
    }
    var userUpper = confirm("Do you want to have upper case characters in your password?");
    if (userUpper == true) {
      passwordParameters += allUpper; // Add all upper cases to the library
    }
    var userLower = confirm("Do you want to have lower case characters in your password?");
    if (userLower == true) {
      passwordParameters += allLower; // Add all lower cases to the library
    }
    if (passwordParameters != "") { // If the library is not blank, proceed to start generating random password up until the length
      for (let counter = 0; counter < passwordLength; counter++) {
      newPassword += passwordParameters[Math.floor(Math.random() * passwordParameters.length)];
      }
    }
    else { // If the library is blank, then we know that the user hasn't added any types
      alert("You need to select at least one character type.")
    }
    document.getElementById("password").innerHTML = newPassword; // Assign the newPassword variable to the HTML file
  }
  else {
    alert("The length of the password must between 8 - 128 characters.")
  }
   
}

// Create copy to clipboard function
function copyToClipboard() {
  var copyText = document.getElementById("password");
  if (copyText.value == "") { // If there's no password generated (blank), prevent any further steps to copy
    alert("There is no password to copy.");
  }
  else {
    copyText.select();
    document.execCommand("copy");
    alert("Copied Password: " + copyText.value); // Show the user the copied password derived from the copyText variable
  }
} 