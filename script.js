const selectpheresee = ["never", "you", "that", "bullet", "break", "bee", "next", "sun", "love"]

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;

function selectRandomItem() {
    randomItem = selectpheresee[Math.floor(Math.random() * selectpheresee.length)]
    console.log(randomItem)
    window.addEventListener("keydown", keyHandeler)
    document.getElementById("letters").addEventListener("click", buttonHandeler)
}

function setUnderScorse() {
    let splitedWord = randomItem.split("");
    let mapedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
    result = mapedWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function chekIfWon() {
    if (result === randomItem) {
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
        document.getElementById("gameover").querySelector("p").style.display = "block"
    }
}

function chekIfLost() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = "block"
        document.getElementById("clue").innerHTML = `<p>random word is: ${randomItem}</p>`
    }
}

function updateHangmanPicture() {
    const image = document.getElementById("image").querySelector("img")
    image.src = `assets/hangman${mistakes}.png`
}

function letterHandeler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used"
    if (randomItem.indexOf(letter) >= 0) {
        setUnderScorse();
        chekIfWon();
    } else if (randomItem.indexOf(letter) === -1) {
        mistakes++
        chekIfLost();
        updateHangmanPicture();
    }
}

function buttonHandeler(event) {
    letterHandeler(event.target.id)
}

function keyHandeler(event) {
    letterHandeler(event.key)
}

selectRandomItem();
setUnderScorse();