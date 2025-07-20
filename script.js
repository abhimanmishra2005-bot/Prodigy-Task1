document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');

    // --- Navigation bar style change on scroll ---
    // This function checks the scroll position and adds/removes a class.
    const handleScroll = () => {
        // We add the 'scrolled' class when the user scrolls more than 50 pixels down.
        if (window.scrollY > 50) {
            // Using Tailwind classes for the scrolled state
            header.classList.add('bg-slate-900/80', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            // Revert to transparent when at the top
            header.classList.remove('bg-slate-900/80', 'backdrop-blur-sm', 'shadow-lg');
        }
    };

    // Listen for scroll events on the window
    window.addEventListener('scroll', handleScroll);

    // --- Mobile Menu Toggle ---
    // This function toggles the visibility of the mobile menu.
    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };
    
    // Add click listener to the hamburger button
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // --- Close mobile menu when a link is clicked ---
    // This improves user experience on mobile devices.
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
});
