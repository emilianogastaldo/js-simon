// Recupero gli oggeti dall'html

const guessNumberElement = document.getElementById('guess-number');
const resultMessage = document.getElementById('result-message');
const playerInput = document.getElementById('player-input');
const buttonPlay = document.getElementById('play-btn');
const formGame = document.getElementById('form-game');
const startButton = document.getElementById('start-btn');
const alertMex = document.getElementById('alert');


//Creo la funzione per generare numeri randomici da 1 a 100
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

//Creo la funzione che genera un array di 5 numeri random
const getNumbers = (number) => {
    const numbers = [];
    while (numbers.length < number) {
        const number = getRandomNumber();
        if (!numbers.includes(number)) numbers.push(number);
    }
    return numbers;
}

// Nascondo il form e l'alert
formGame.classList.add('hidden');
alertMex.classList.add('hidden');

//Decido quanti numeri bisogna indovinare
const questNumber = 5


// Pulsante per iniziare a giocare

// Array per salvare i numeri del giocatore
const playerNumbers = [];

//Creo l'array dei numeri da indovinare
const toGuessNumbers = getNumbers(questNumber);

//Stampo in pagina i numeri da indovinare
setTimeout(() => {
    let toGuessNumbersText = '';
    for (let i = 0; i < toGuessNumbers.length; i++) {
        toGuessNumbersText += `<span>${toGuessNumbers[i]}</span>`;
    }

    console.log(toGuessNumbers);

    guessNumberElement.innerHTML = toGuessNumbersText;

    //Faccio sparire i numeri e faccio apparire il form
    setTimeout(() => {
        guessNumberElement.classList.add('hidden');
        formGame.classList.remove('hidden');
    }, 3000);
}, 500);


formGame.addEventListener('submit', (e) => {
    e.preventDefault();

    const playerNumber = parseInt(playerInput.value);
    if (playerNumbers.includes(playerNumber)) {
        alertMex.innerText = 'Attenzione hai già inserito questo numero';
        alertMex.classList.remove('hidden');
    } else if (isNaN(playerNumber)) {
        alertMex.innerText = 'Attenzione non hai inserito un numero';
        alertMex.classList.remove('hidden');
    } else {
        alertMex.classList.add('hidden');
        playerNumbers.push(playerNumber);
    };

    console.log('lunghezza array giocatore: ', playerNumbers);
    console.log('valore del giocatore', playerNumber);

    //Creo la variabile per lo score del player
    let playerScore = 0;

    //Creo il messaggio
    let message = 'Hai indovitano i seguenti numeri: ';

    if (playerNumbers.length === questNumber) {

        // Controllo se i numeri inseriti dal player corrispondono
        for (let i = 0; i < questNumber; i++) {
            if (toGuessNumbers.includes(playerNumbers[i])) {
                console.log('indice', i);
                message += playerNumbers[i] + ' ';
                console.log(message);
                playerScore++;
            }
        }

        //Casi speciali di messaggio
        if (playerScore === 0) {
            message = 'Mi dispiace, non hai indivinato nessun numero'
        } else if (playerScore === toGuessNumbers.length) {
            message += '<br>WOW li hai ricordati tutti!'
        }

        //Stampo il messaggio nel DOM
        resultMessage.innerHTML = message;

        //Permetto di rivedere i numeri, il pulsante per giocare di nuovo e tolgo il form
        guessNumberElement.classList.remove('hidden');
        formGame.classList.add('hidden');
        startButton.classList.remove('hidden');
    };
    playerInput.value = '';
});




