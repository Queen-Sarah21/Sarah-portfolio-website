function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openModal() {
    document.getElementById("descriptionModal").style.display = "block";
}

function closeModal() {
    document.getElementById("descriptionModal").style.display = "none";
}

// Optional: Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("descriptionModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};