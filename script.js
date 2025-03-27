document.addEventListener('DOMContentLoaded', function() {
      // Get all navigation items
      const navItems = document.querySelectorAll('.nav-item');
      
      // Add click event listener to each navigation item
      navItems.forEach(item => {
          item.addEventListener('click', function(e) {
              e.preventDefault();
              
              // Remove active class from all items
              navItems.forEach(navItem => {
                  navItem.classList.remove('active');
              });
              
              // Add active class to clicked item
              this.classList.add('active');
              
              // Get the page name from data attribute
              const pageName = this.getAttribute('data-page');
              
              // Here you could add code to change the content based on the selected page
              console.log(`Navigated to: ${pageName}`);
          });
      });
      
      // More button functionality (if needed)
      const moreButton = document.querySelector('.more-button');
      if (moreButton) {
          moreButton.addEventListener('click', function() {
              console.log('More options clicked');
              // Add your more button functionality here
          });
      }
  });