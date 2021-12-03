console.log("inlogg");

// hämta alla element

const inlogText = document.getElementById("inlogText");
const wrongInlogText = document.getElementById("wrongInlogText");
const welcomeText = document.getElementById("welcomeText");

const username = document.getElementById("username");
const password = document.getElementById("password");

//const usernameInput = document.getElementById("usernameInput");
//const passwordInput = document.getElementById("passwordInput");

const buttonLogin = document.getElementById("buttonLogin");

//printar ut de nya divs genom localstorage
// min array/function printList();

// hämtar list från localstorage & if/else om den inte finns = tom
// json för att göra om sträng till en array

function getInlogFromLS() {
    let collectedInlog = localStorage.getItem("inlog")

    let inlog = []

    if(collectedInlog) {
        inlog = JSON.parse(collectedinlog)
    } 

    return inlog
}

// hämtar input, hämtar inlog från Localstorage, lägger till input i inlog och sparar i LS
// json för att göra en array till en sträng 



// skapa function för button = inlogg

buttonLogin.addEventListener("click", () => {

    let usernameInput = document.getElementById("usernameInput").value
    let passwordInput = document.getElementById("passwordInput").value

    let username = "janne"
    let password = "test"

    if(usernameInput == username && passwordInput == password) {
        document.getElementById("buttonLogin").innerHTML = "logga ut";
        document.getElementById("welcomeText").innerHTML = "Välkommen, du är inloggad!";
        console.group("inloggad")
    } else 
    {
        document.getElementById("wrongInlogText").innerHTML = "fel lösenord eller användarnamn";
    console.log("fel lösenord")
    }
    console.log(buttonLogin)
})

// skapa function för byte av vilket state man är i, inloggad eller ej

// function för om man skriver fel