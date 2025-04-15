
        // JavaScript for handling menu and tab navigation
        document.addEventListener('DOMContentLoaded', function() {
            // DOM elements
            const menuBtn = document.getElementById('menuBtn');
            const sideMenu = document.getElementById('sideMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const tabLinks = document.querySelectorAll('.tab-link');
            const tabContents = document.querySelectorAll('.tab-content');
            
            // Toggle sidebar menu
            menuBtn.addEventListener('click', function() {
                sideMenu.classList.toggle('open');
                menuOverlay.style.display = sideMenu.classList.contains('open') ? 'block' : 'none';
            });
            
            // Close menu when clicking overlay
            menuOverlay.addEventListener('click', function() {
                sideMenu.classList.remove('open');
                menuOverlay.style.display = 'none';
            });
            
            // Tab switching functionality
            tabLinks.forEach(function(tabLink) {
                tabLink.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Update active tab link
                    tabLinks.forEach(function(link) {
                        link.classList.remove('active');
                    });
                    
                    // Find all links for this tab and activate them
                    document.querySelectorAll('[data-tab="' + tabId + '"]').forEach(function(link) {
                        link.classList.add('active');
                    });
                    
                    // Show active tab content
                    tabContents.forEach(function(content) {
                        content.classList.remove('active');
                    });
                    document.getElementById(tabId + 'Tab').classList.add('active');
                    
                    // Close sidebar if open
                    sideMenu.classList.remove('open');
                    menuOverlay.style.display = 'none';
                });
            });
        });

        /* This script handles three main features:
         * 1. Burger Menu: Opens and closes the side menu when the burger icon is clicked
         *    - The menu slides in from the left side
         *    - Clicking the overlay closes the menu
         *
         * 2. Tab Navigation: Switches between Home, Routes, and Live Map tabs
         *    - Updates the active state in both bottom navigation and side menu
         *    - Shows the corresponding content
         *
         * 3. Menu Close: Closes the menu when a menu item is clicked or when
         *    clicking outside the menu on the overlay
         */
    