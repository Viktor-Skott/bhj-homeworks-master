let clickElement = document.getElementById('cookie');
let clickerCount = document.getElementById('clicker__counter')
clickElement.onclick = function() {
    clickerCount.textContent++;
    clickElement.style.width = "250px"
    setTimeout(() => {clickElement.style.width = "200px"}, 100)
}