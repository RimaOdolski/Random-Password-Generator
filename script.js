var pLength = prompt("Choose a length of your password between 8 and 128 characters");

if (pLength < 8 || pLength > 128) {
alert("Length must between 8-128 characters");
}

else 

var specialChar = confirm(" Would you like to have any special characters in your Password?");
var numChar = confirm("Would you like to have a numeric character in your password?");
var lowerCase = confirm("would you like to have lower case characters");
var upperCase = confirm("would you like to have upper case characters");



//Generate PW
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log (getRandomNumber());