function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleTheme() {
    const body = document.body;
    const themeToggleIcon = document.getElementById("theme-toggle");

    // Toggle dark theme class
    body.classList.toggle("dark-theme");

    // Change icon based on the theme
    if (body.classList.contains("dark-theme")) {
        themeToggleIcon.src = "assets/brightness.png"; // Change to brightness icon
    } else {
        themeToggleIcon.src = "assets/moon.png"; // Change back to moon icon
    }
}

// Add event listener to the theme toggle icon
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);