const timer = document.getElementById('display');
let time = 10;

setInterval(updateCountdown, 1000)

function updateCountdown() {
    let left = time
    timer.innerHTML = left
    time--;

    if (time < 0) {
        clearInterval(left);
        document.getElementById("display").innerHTML = 'TIMES UP';
        var image = document.getElementById('imagedisplay');
        image.style.visibility = "visible";

    } 
}
