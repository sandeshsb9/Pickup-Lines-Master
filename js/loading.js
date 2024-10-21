   // JavaScript to handle the loading and welcome sequence
   window.onload = function () {
    const loadingDiv = document.getElementById('loading');
    const welcomeDiv = document.getElementById('welcome');
    const containerDiv = document.querySelector('.container');

    // Show "Loading..." first
    loadingDiv.style.display = 'block';

    // After 3 seconds, show "Welcome to Pickup Lines Master"
    setTimeout(() => {
      loadingDiv.style.display = 'none';
      welcomeDiv.style.display = 'block';
    }, 3000);

    // After another 3 seconds, show the actual content
    setTimeout(() => {
      welcomeDiv.style.display = 'none';
      containerDiv.style.display = 'block';
    }, 6000);
  };