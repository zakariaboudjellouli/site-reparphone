console.log("Mon site fonctionne !");
document.getElementById("monBouton").addEventListener("click", function() {
    document.getElementById("resultat").textContent = "BOUDZ";
});

document.getElementById("boutonHaut").addEventListener("click", function() {
    window.scrollTo(0, 0);
});