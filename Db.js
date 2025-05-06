document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    console.log(`Pesan dari ${name}: ${message}`);
});

document.querySelectorAll("#rating span").forEach(star => {
    star.addEventListener("click", function() {
        let selectedRating = this.getAttribute("data-star");
        document.getElementById("rating-info").textContent = `Rating: ${selectedRating} dari 5 bintang`;
    });
});
