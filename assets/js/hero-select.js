document.getElementById("hero-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var hero = document.querySelector('input[name="hero"]:checked').value;
    sessionStorage.setItem("selectedHero", hero);
    window.location.href = "tamez.html";
});