console.log("inlogg");

// hämta alla element

const logIn = document.getElementById("logIn");
const wrongInlog = document.getElementById("wrongInlog");
const welcome = document.getElementById("welcome");

const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

const buttonLogin = document.getElementById("buttonLogin");
const buttonLogout = document.getElementById("buttonLogout");

// hämtar list från localstorage & if/else om den inte finns = tom
// json för att göra om sträng till en array

function getPostsFromLS() {
    let collectedPosts = localStorage.getItem("posts")

    let posts = []

    if(collectedPosts) {
        posts = JSON.parse(collectedPosts)
    } 

    return posts
}

// skapa function för button = inlogg

// skapa function för byte av vilket state man är i, inloggad eller ej

// function för om man skriver fel