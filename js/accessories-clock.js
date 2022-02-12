(function updateAccessoriesClock(){
    const clockAccessoriesContainer = document.querySelector('.accessories__clock');
    clockAccessoriesContainer.textContent = new Date().toLocaleTimeString();
  
    setInterval(updateAccessoriesClock,1000)
  })()