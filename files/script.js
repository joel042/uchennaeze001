
  // Dark Mode Toggle
        const toggleButton = document.getElementById('dark-mode-toggle');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelector('.navbar').classList.toggle('dark-mode');
            document.querySelector('.heroName').classList.toggle('dark-mode');
            document.querySelector('.work-process').classList.toggle('dark-mode');
        });
   