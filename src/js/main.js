const cookieBanner = document.querySelector("#cookieBanner");
const cookieAccept = document.querySelector("#cookieAccept");
const cookieReject = document.querySelector("#cookieReject");

const COOKIE_KEY = "ludimente_cookies_consent";

// Funciones para mostrar/ocultar
function hideCookies(){ 
    if(cookieBanner) cookieBanner.style.display = "none"; 
}

function showCookies(){ 
    if(cookieBanner) cookieBanner.style.display = "flex"; // Usamos flex para mantener el diseño
}

// 1. Revisar si ya existe una decisión guardada en localStorage
const saved = localStorage.getItem(COOKIE_KEY);

if (saved) {
    hideCookies();
} else {
    showCookies();
}

// 2. Evento para Aceptar
if(cookieAccept) {
    cookieAccept.addEventListener("click", () => {
        localStorage.setItem(COOKIE_KEY, "accepted");
        hideCookies();
        console.log("Cookies aceptadas");
    });
}

// 3. Evento para Rechazar
if(cookieReject) {
    cookieReject.addEventListener("click", () => {
        localStorage.setItem(COOKIE_KEY, "rejected");
        hideCookies();
        console.log("Cookies rechazadas");
    });
}