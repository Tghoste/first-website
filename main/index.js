        // JavaScript for service category tabs functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Get all service category tabs and service cards
            const categoryTabs = document.querySelectorAll('.service-category');
            const serviceCards = document.querySelectorAll('.service-card');
            
            // Add click event listener to each category tab
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove 'active' class from all tabs
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add 'active' class to the clicked tab
                    tab.classList.add('active');
                    
                    // Get the category value from the data-category attribute
                    const category = tab.getAttribute('data-category');
                    
                    // Filter service cards based on the selected category
                    serviceCards.forEach(card => {
                        const cardType = card.getAttribute('data-type');
                        
                        if (category === 'all' || category === cardType) {
                             // Show the card if it matches the category or if 'All Services' is selected
                            card.classList.remove('hidden');
                        } else {
                            // Hide the card if it doesn't match the category
                            card.classList.add('hidden');
                        }
                    });
                });
            });
        });