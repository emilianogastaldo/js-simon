// Recupero gli oggeti dall'html

const guessNumberElement = document.getElementById('guess-number');
const resultMessage = document.getElementById('result-message');
const playerInput = document.getElementById('player-input');
const buttonPlay = document.querySelector('button');
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

//Decido quanti numeri bisogna indovinare
const questNumber = 5

//Creo l'array dei numeri da indovinare
const toGuessNumbers = getNumbers(questNumber);

//Stampo in pagina i numeri da indovinare
let toGuessNumbersText = '';
for (let i = 0; i < toGuessNumbers.length; i++) {
    toGuessNumbersText += `<span>${toGuessNumbers[i]}</span>`;
}
console.log(toGuessNumbers);
guessNumberElement.innerHTML = toGuessNumbersText;

//Faccio sparire i numeri e inizi il giochino
setTimeout(() => {
    guessNumberElement.classList.add('hidden');
    setTimeout(() => {

        //Creo la variabile per lo score del player
        let playerScore = 0;

        //Creo il messaggio
        message = 'Hai indovitano i seguenti numeri: ';

        // Controllo se i numeri inseriti dal player corrispondono
        for (let i = 0; i < toGuessNumbers.length; i++) {

            // Recupero il numero inserito
            const playerNumber = parseInt(prompt('Dammi un numero'));

            if (toGuessNumbers.includes(playerNumber)) {
                message += playerNumber + ' ';
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
        // guessNumberElement.classList.remove('hidden');

    }, 1000);
}, 3000);

