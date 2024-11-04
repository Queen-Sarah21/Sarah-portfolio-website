function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to open and close modals
document.addEventListener('DOMContentLoaded', function () {
    // Open modal on button click
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', function () {
            const modalSelector = button.getAttribute('data-modal');
            const modal = document.querySelector(`.modal[data-modal="${modalSelector}"]`);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Close modal when clicking on close button or outside modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (event) {
            if (event.target.classList.contains('close') || event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});