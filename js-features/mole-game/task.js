const kill = document.getElementById('dead');
const loose = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);
let holeStart = function () {
    for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
        let hole = getHole(holeIndex);
        hole.addEventListener('click', function () {
            if (hole.classList.contains('hole_has-mole')) {
                kill.textContent++
            } else {
                loose.textContent++
            }
            if (kill.textContent > 9) {
                alert("Вы выиграли!");
                kill.textContent = 0;
                loose.textContent = 0;
            }
            if (loose.textContent > 9) {
                alert("Вы проиграли!");
                kill.textContent = 0;
                loose.textContent = 0;
            }
        });
    };
}    

holeStart()


