
# Metodo A

1) Creo un array di 5 numeri casuali e li stampo a video
    (Posso stampare l'array diretto o creo 5 span con un ciclo?)
2) Dopo un tot di secondi (30 per l'esercizio, 5 mentre provo) faccio sparire i numeri
3) Spariti i numeri chiedo 5 numeri all'utente (intanto con i prompt)
4) A ogni numero inserito controllo se è nell'array dei numeri da indovinare
    Se si salvo in numero in un messaggio e magari ne tengo conto con un contatore
5) Alla fine stampo il messaggio con i numeri indovinati e se il contatore avrà la stessa lunghezza dell'array allora potrei stampare un messaggio di vittoria.

# Metodo B
I passaggi 1, 2 e 3 sono uguali.
4) Salvo direttamente i 5 numeri in un array.
5) Confronto i due array con un doppio for. Ogni volta che uno dei numeri inseriti combacia con uno dei numeri randomici, salvo il numero inserito in un messaggio e incremento un contatore.
6) Passaggio uguale a quello del metodo A.

# ! BONUS:
* Cambiare i prompt con degli input

* Validazioni da fare:
    Non inserire qualcosa che non sia un numero.
    Non inserire due volte lo stesso numero.

* Probabilmente dovrò stare attento a far ricominciare il gioco, magari con un bottone.
    Quindi dovrò gestire gli input e il pulsante di reset in maniere differenti.
    Dovrò ripristinare la schermata iniziale.

* Renderlo guardabile tramire CSS.