
  // // Dark Mode Toggle
  //       const toggleButton = document.getElementById('dark-mode-toggle');
  //       toggleButton.addEventListener('click', () => {
  //           document.body.classList.toggle('dark-mode');
  //           document.querySelector('.navbar').classList.toggle('dark-mode');
  //           document.querySelector('.heroName').classList.toggle('dark-mode');
  //           document.querySelector('.work-process').classList.toggle('dark-mode');
  //       });
   

  
    document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.getElementById('dark-mode-toggle');
        const body = document.body;

        // Check for saved user preference, if any, on load of the website
        if (localStorage.getItem('dark-mode') === 'true') {
            body.classList.add('dark-mode');
        }

        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            // Save the user preference in local storage
            localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
        });
    });
