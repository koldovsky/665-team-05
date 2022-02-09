function updateHistoryClock() {
    const clockHistoryContainer = document.querySelector('.history__clock');
    clockHistoryContainer.textContent = new Date().toLocaleTimeString();
}
setInterval(updateHistoryClock, 1000);