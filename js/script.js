// Recupero gli oggeti dall'html

const guessNumber = document.getElementById('guess-number');

//Creo la funzione per generare numeri randomici da 1 a 100
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

