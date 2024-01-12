// Recupero gli oggeti dall'html

const guessNumberElement = document.getElementById('guess-number');
const resultMessage = document.getElementById('result-message');

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

const toGuessNumbers = getNumbers(questNumber);
let toGuessNumbersText = '';
for (let i = 0; i < toGuessNumbers.length; i++) {
    toGuessNumbersText += `<span>${toGuessNumbers[i]}</span>`;
}
console.log(toGuessNumbers);
guessNumberElement.innerHTML = toGuessNumbersText;

setTimeout(() => {
    guessNumberElement.classList.add('hidden');
    setTimeout(() => {
        let playerScore = 0;
        let message = 'Hai indovitano i seguenti numeri: ';
        for (let i = 0; i < toGuessNumbers.length; i++) {
            const playerNumber = parseInt(prompt('Dammi un numero'));
            if (toGuessNumbers.includes(playerNumber)) {
                message += playerNumber + ' ';
                playerScore++;
            }
        }
        if (playerScore === 0) {
            message = 'Mi dispiace, non hai indivinato nessun numero'
        } else if (playerScore === toGuessNumbers.length) {
            message += '<br>WOW li hai ricordati tutti!'
        }
        resultMessage.innerHTML = message;

    }, 1000);
}, 3000);

