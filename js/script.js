// Recupero gli oggeti dall'html

const guessNumberElement = document.getElementById('guess-number');

//Creo la funzione per generare numeri randomici da 1 a 100
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

//Creo la funzione che genera un array di 5 numeri random
const getNumbers = () => {
    const numbers = [];
    while (numbers.length < 5) {
        const number = getRandomNumber();
        if (!numbers.includes(number)) numbers.push(number);
    }
    return numbers;
}
const toGuessNumbers = getNumbers();
let toGuessNumbersText = '';
for (let i = 0; i < toGuessNumbers.length; i++) {
    toGuessNumbersText += `<span>${toGuessNumbers[i]}</span>`;
}
guessNumberElement.innerHTML = toGuessNumbersText;

setTimeout(() => {
    guessNumberElement.classList.add('hidden');
}, 5000);

