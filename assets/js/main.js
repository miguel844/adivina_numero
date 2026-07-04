const startBtn = document.getElementById("startBtn");
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const history = document.getElementById("history");
const count = document.getElementById("count");


let randomNumber;
let contador = 0;
history.innerHTML = "";
message.innerHTML = "";


resetGame();


startBtn.addEventListener("click", function () {
    initGame();
});

checkBtn.addEventListener("click", function () {
    checkNumber(guessInput.value);
})

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkBtn.click();
    }
})

function initGame() {
    guessInput.disabled = false;
    checkBtn.disabled = false;
    startBtn.disabled = true;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    contador = 0;
    count.textContent = contador;
    message.innerHTML = "";
    console.log("El numero a adivinar es el " + randomNumber);
}

function resetGame() {
    guessInput.value = "";
    guessInput.disabled = true;
    checkBtn.disabled = true;
    startBtn.disabled = false;
}

function checkNumber(num) {
    num = parseInt(num);
    contador++;
    count.textContent = contador;
    
    if (isNaN(num)) {
        message.innerHTML += "<li>No has introducido un numero.</li>";
    } else {
        if (num === randomNumber) {
            message.innerHTML += "<li>Has ganado. Has encontrado el número " + num + ".</li>";
            confirm("Has ganado.");

            history.innerHTML += "<li>Has acertado el numero " + randomNumber + " en " + contador + " intentos.</li>";

            resetGame();
        } else if (num > randomNumber) {
            message.innerHTML += "<li>El número " + num + " es mayor.</li>";
        } else {
            message.innerHTML += "<li>El número " + num + " es menor.</li>";
        }
    }

}
