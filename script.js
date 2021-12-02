console.log("inlogg");

// hämta alla element

const logIn = document.getElementById("logIn");
const wrongInlog = document.getElementById("wrongInlog");
const welcome = document.getElementById("welcome");

const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

const button = document.getElementById("password");

// hämtar list från localstorage & if/else om den inte finns = tom
// json för att göra om sträng till en array