let subtractCurrent = () => {
    let timerInterval = setInterval(subtractCurrent, 1000);
    let timer = document.getElementById('timer');
    
    if (timer.textContent > 0) {
        timer.textContent--;
    }
    if (timer.textContent <= 0) {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
    }
}

subtractCurrent();