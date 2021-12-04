
// rätt eller fel inlogg sparas till LocalStorage

function checkInlogSaveToLS () {

    let usernameInput = document.getElementById("usernameInput").value
    let passwordInput = document.getElementById("passwordInput").value

    let username = "janne"
    let password = "test"

    if(usernameInput == username && passwordInput == password) {
        let userObject = {username: username, password: password};

        localStorage.setItem("user", JSON.stringify(userObject));
    } else {
        console.log("fel användarnamn eller lösenord");
    }
}



// döljer dessa knappar, ska bara synas vid vissa tillfällen
document.getElementById("buttonLogout").style.display = "none";
document.getElementById("buttonGetback").style.display = "none";

buttonLogin.addEventListener("click", () => {
    
    let usernameInput = document.getElementById("usernameInput").value
    let passwordInput = document.getElementById("passwordInput").value

    let username = "janne"
    let password = "test"


    // rätt lösenord & användarnamn = döljer och visar vissa element
    if(usernameInput == username && passwordInput == password) {
        document.getElementById("buttonLogout").style.display = "block";
        document.getElementById("welcomeText").innerHTML = "Välkommen, du är inloggad!";

        document.getElementById("username").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("inlogText").style.display = "none";
        document.getElementById("usernameInput").style.display = "none";
        document.getElementById("passwordInput").style.display = "none";
        document.getElementById("buttonLogin").style.display = "none";
        document.getElementById("buttonGetback").style.display = "none";
        console.group("inloggad")

    // fel användarnamn & lösenord = döljer och visar valda element
    } else 
    {
        document.getElementById("buttonGetback").style.display = "block";
        document.getElementById("wrongInlogText").innerHTML = "fel lösenord eller användarnamn";

        document.getElementById("username").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("inlogText").style.display = "none";
        document.getElementById("usernameInput").style.display = "none";
        document.getElementById("passwordInput").style.display = "none";
        document.getElementById("buttonLogin").style.display = "none";
        document.getElementById("buttonLogout").style.display = "none";

    console.log("fel lösenord")

    }

    console.log(buttonLogin)
})


// En funktion för min logga-ut-knapp, tar fram element

buttonLogout.addEventListener("click", () => {

    document.getElementById("usernameInput").style.display = "block";
    document.getElementById("passwordInput").style.display = "block";
    document.getElementById("username").style.display = "block";
    document.getElementById("password").style.display = "block";
    document.getElementById("buttonLogin").style.display = "block";
    document.getElementById("inlogText").style.display = "block";

    document.getElementById("welcomeText").style.display = "none";
    document.getElementById("buttonLogout").style.display = "none";
    document.getElementById("buttonGetback").style.display = "none";
    console.log(buttonLogout)
})

// En funktion för min gå-tillbaka-knapp, tar fram element

buttonGetback.addEventListener("click", () => {

    document.getElementById("usernameInput").style.display = "block";
    document.getElementById("passwordInput").style.display = "block";
    document.getElementById("username").style.display = "block";
    document.getElementById("password").style.display = "block";
    document.getElementById("buttonLogin").style.display = "block";
    document.getElementById("inlogText").style.display = "block";

    document.getElementById("welcomeText").style.display = "none";
    document.getElementById("buttonLogout").style.display = "none";
    document.getElementById("wrongInlogText").style.display = "none";
    document.getElementById("buttonGetback").style.display = "none";

    console.log(buttonGetback)
})