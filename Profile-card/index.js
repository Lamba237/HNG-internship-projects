function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `⏲ ${utcTime} UTC`;
}
setInterval(updateTime, 1000);
updateTime();