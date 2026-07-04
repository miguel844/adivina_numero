const startBtn = document.getElementById("startBtn");
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

let randomNumber;
resetGame();


startBtn.addEventListener("click", function () {
    initGame();
});

checkBtn.addEventListener("click", function () {
    checkNumber( guessInput.value);
})

function initGame() {
    guessInput.disabled = false;
    checkBtn.disabled = false;
    startBtn.disabled = true;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log("El numero a adivinar es el " + randomNumber)
}

function resetGame() {
    guessInput.value = "";
    guessInput.disabled = true;
    checkBtn.disabled = true;
    startBtn.disabled = false;
}

function checkNumber(num) {
    num = parseInt(num);
    // Comprobar que sea un number
    if (num === randomNumber){
        console.log("Has ganado.");
        resetGame();
    } else if(num > randomNumber){
        console.log("El número "+ num +" es mayor.");
    } else {
        console.log("El número "+ num +" es menor.");
    }  

}
