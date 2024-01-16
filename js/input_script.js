// Recupero gli oggeti dall'html
const countdownElement = document.getElementById('countdown');
const guessNumberElement = document.getElementById('guess-number');
const resultMessage = document.getElementById('result-message');
const formGame = document.getElementById('form-game');
const inputGroup = document.querySelector('.input-wrapper');
const buttonPlay = document.getElementById('play-btn');
// const startButton = document.getElementById('start-btn');
const alertMex = document.getElementById('alert');

//Creo la funzione che genera un array di numeri random
const getNumbers = (min, max, number) => {
    const numbers = [];
    while (numbers.length < number) {
        const number = Math.floor(Math.random() * max - min + 1) + min;
        if (!numbers.includes(number)) numbers.push(number);
    }
    return numbers;
}

//Info iniziali
const min = 1;
const max = 100;
const questNumber = 5;
let time = 5;

// Nascondo il form e l'alert
formGame.classList.add('hidden');
alertMex.classList.add('hidden');


// Array per salvare i numeri del giocatore
const playerNumbers = [];

//Creo l'array dei numeri da indovinare
const toGuessNumbers = getNumbers(min, max, questNumber);

//Stampo in pagina i numeri da indovinare e gli input
let toGuessNumbersText = '';
let inputs = '';
for (let i = 0; i < toGuessNumbers.length; i++) {
    toGuessNumbersText += `<li>${toGuessNumbers[i]}</li>`;
    inputs += `<input class="player-input" type="number" required>`;
}

guessNumberElement.innerHTML = toGuessNumbersText;
inputGroup.innerHTML = inputs;
console.log(toGuessNumbers);
// Recupero gli input
const playerInputs = document.querySelectorAll('.player-input');
console.log(playerInputs);

// Inizializzo il countdown
countdownElement.innerText = time;
// Faccio il countdown
const countdown = setInterval(() => {
    countdownElement.innerText = --time;
    if (time <= 0) {

        clearInterval(countdown);

        //Faccio sparire i numeri e faccio apparire il form
        guessNumberElement.classList.add('hidden');
        countdownElement.classList.add('hidden');
        formGame.classList.remove('hidden');
    }
}, 1000);


// Controllo la soluzione dell'utente
const confirm = e => {
    // Blocco il ricarco della pagina
    e.preventDefault();

    const userGuesses = [];

    for (let input of playerInputs) {
        const value = parseInt(input.value);
        if (!isNaN(value) && value >= min && value <= max && !userGuesses.includes(value)) {
            userGuesses.push(value);
        };
    };

    //Validazione
    if (userGuesses.length !== questNumber) {
        alertMex.classList.remove('hidden');
        alertMex.innerText = 'Ci sono valori non validi o duplicati';
        return;
    }
    console.log(userGuesses);

    // Controllo quanti ne ha indovinati
    const correctNumbers = [];
    for (let guess of userGuesses) {
        if (toGuessNumbers.includes(guess)) correctNumbers.push(guess);
    }

    // Stampo il risultato
    alertMex.classList.add('hidden');
    formGame.classList.add('hidden');
    guessNumberElement.classList.remove('hidden');
    let message = `Hai indovitano i seguenti numeri: ${correctNumbers}`;
    if (correctNumbers.length === 0) {
        message = 'Mi dispiace, non hai indivinato nessun numero'
    } else if (correctNumbers.length === questNumber) {
        message += '<br>WOW li hai ricordati tutti!'
    }
    resultMessage.innerHTML = message;
};


formGame.addEventListener('submit', confirm);

// Come lo avevo fatto la prima volta

// formGame.addEventListener('submit', e => {
//     e.preventDefault();

//     const playerNumber = parseInt(playerInput.value);
//     if (playerNumbers.includes(playerNumber)) {
//         alertMex.innerText = 'Attenzione hai già inserito questo numero';
//         alertMex.classList.remove('hidden');
//     } else if (isNaN(playerNumber)) {
//         alertMex.innerText = 'Attenzione non hai inserito un numero';
//         alertMex.classList.remove('hidden');
//     } else {
//         alertMex.classList.add('hidden');
//         playerNumbers.push(playerNumber);
//     };

//     console.log('lunghezza array giocatore: ', playerNumbers);
//     console.log('valore del giocatore', playerNumber);

//     //Creo la variabile per lo score del player
//     let playerScore = 0;

//     //Creo il messaggio
//     let message = 'Hai indovitano i seguenti numeri: ';

//     if (playerNumbers.length === questNumber) {

//         // Controllo se i numeri inseriti dal player corrispondono
//         for (let i = 0; i < questNumber; i++) {
//             if (toGuessNumbers.includes(playerNumbers[i])) {
//                 console.log('indice', i);
//                 message += playerNumbers[i] + ' ';
//                 console.log(message);
//                 playerScore++;
//             }
//         }

//         //Casi speciali di messaggio
//         if (playerScore === 0) {
//             message = 'Mi dispiace, non hai indivinato nessun numero'
//         } else if (playerScore === toGuessNumbers.length) {
//             message += '<br>WOW li hai ricordati tutti!'
//         }

//         //Stampo il messaggio nel DOM
//         resultMessage.innerHTML = message;

//         //Permetto di rivedere i numeri, il pulsante per giocare di nuovo e tolgo il form
//         guessNumberElement.classList.remove('hidden');
//         formGame.classList.add('hidden');
//         startButton.classList.remove('hidden');
//     };
//     playerInput.value = '';
// });




