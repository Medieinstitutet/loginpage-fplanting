// hämtar in knapparna
let buttonLogin = document.getElementById("buttonLogin");
let buttonLogout = document.getElementById("buttonLogout");
let buttonGetback = document.getElementById("buttonGetback");

// så man kommer in på rätt vy
updateView();

// kallar en funktion till min logga-in-knapp
buttonLogin.addEventListener("click", checkInlogSaveToLS);

// kallar en funktion till min logga-ut-knapp
buttonLogout.addEventListener("click", removeFromLS);

function removeFromLS () {
    localStorage.removeItem("user");
    updateView();
}

//kallar en funktion till min gå-tillbaka-knapp
buttonGetback.addEventListener("click", updateView);

// rätt eller fel inlogg sparas till LocalStorage
function checkInlogSaveToLS () {

    let usernameInput = document.getElementById("usernameInput").value
    let passwordInput = document.getElementById("passwordInput").value

    let username = "janne"
    let password = "test"

    if(usernameInput == username && passwordInput == password) {
        let userObject = {username: username, password: password};

        localStorage.setItem("user", JSON.stringify(userObject));
        updateView();

    // uppdaterar vyn för fel inlogg
    } else {
        document.getElementById("viewInlogged").style.display = "none";
        document.getElementById("viewWronginlog").style.display = "block";
        document.getElementById("viewLogin").style.display = "none";
        console.log("fel användarnamn eller lösenord");
    }
}

// function för om vi är inloggad eller inte och uppdaterar sidan utifrån det
function updateView () {
    let userString = localStorage.getItem("user")

    // vyn om man är inloggad
    if(userString) {
        document.getElementById("viewInlogged").style.display = "block";
        document.getElementById("viewWronginlog").style.display = "none";
        document.getElementById("viewLogin").style.display = "none";
        document.getElementById("welcomeMessage").style.display = "block";

        // lägger till en hälsning med användarnamnet
        let userObject = JSON.parse(userString)
        document.getElementById("welcomeText").innerHTML = "Välkommen, " + (userObject.username) + "!";


    // vyn om man inte är inloggad
    } else
    {
        document.getElementById("viewInlogged").style.display = "none";
        document.getElementById("viewWronginlog").style.display = "none";
        document.getElementById("viewLogin").style.display = "block";
        document.getElementById("welcomeMessage").style.display = "none";

        // tömmer det jag skrivit när jag loggar ut
        document.getElementById("passwordInput").value = "";
        document.getElementById("usernameInput").value = "";
    }
}