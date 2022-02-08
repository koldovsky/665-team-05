(function() {
    const countdownDays = document.querySelector('#trendy__countdown__days');
    const countdownHours = document.querySelector('#trendy__countdown__hours');
    const countdownMinutes = document.querySelector('#trendy__countdown__minutes');
    const countdownSeconds = document.querySelector('#trendy__countdown__seconds');
    const startTime = new Date('2022-03-01T24:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const secondsInHour = 60 * 60;
        const totalSeconds = Math.floor((startTime - currentDate) / 1000);
        const leftDays = Math.floor(totalSeconds / secondsInHour / 24);
        const leftHours = Math.floor(totalSeconds / secondsInHour) % 24;
        const leftMinutes = Math.floor(totalSeconds  / 60) % 60;
        const leftSeconds = totalSeconds % 60;
        countdownDays.innerHTML = leftDays;
        countdownHours.innerHTML = leftHours;
        countdownMinutes.innerHTML = leftMinutes;
        countdownSeconds.innerHTML = leftSeconds;
    }

    setInterval(updateCountdown, 1000);
})();