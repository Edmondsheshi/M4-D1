
//typeof restituisce il tipo di dati di una variabile
//throw new Error Mostra errore nella log, serve segnalare problematiche
//split suddivide una stringa in un array di sottostringhe
//slice
// Math.max restituisce il numero più grandi nei parametri

//1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.

function somma (a , b) {
    let sommaVariabili = a + b 
    if (a === b ) {
         sommaVariabili *= 3    
    } return sommaVariabili
}
console.log(somma(2 , 2));





//2. Crea una funzione che controlli sue numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50

function sommaVarie (c , d) {
    if (typeof c !== 'number' || typeof d !== 'number' || !Number.isInteger(c) || !Number.isInteger(d)){
        throw new Error ('i parametri devono essere numeri interi')
    } return  c === 50 ||  d === 50 || (c + d) == 50 
}
console.log(sommaVarie (20,'ciao' ));




//3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
//Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function removeSez(str1, posizione) {
    posizione = posizione += 1
    return str1.slice(0, posizione) + str1.slice(posizione +1)
}
console.log(removeSez( "ciao" , 1));


//4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.

function checkNum(e , f , g) {
    let valorePiuAlto = e
    if (valorePiuAlto < f) {valorePiuAlto < g}
    if (valorePiuAlto < g) { valorePiuAlto = g}
        return valorePiuAlto
    // return Math.max(e , f , g) // ritorna il valore piu alto (seconda opzione)
}

console.log("il numero più alto è") (checkNum (10 , 20 , 30));

//5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
//Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function numeriCompresi(v , o) {
    let primoValore = 0;
    let secondoValore =0;
    if ( v >= 40 && <= 60 || v <= 70 || v <= 100 ) {
        primoValore = 1
    } if ( o >= 40 && <= 60 || o <= 70 || o <= 100 ){
        secondoValore = 1
    } if ( primoValore + secondoValore === true){
        return true
    } else {
        return false
    }

    // return (( v >= 40 && <= 60 || v <= 70 || v <= 100 ) && ( o >= 40 && <= 60 || o <= 70 || o <= 100 ))
}


//6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero
//dato di volte una stringa data.Sia la stringa che il numero devono essere passate come parametri.


function stringa(str2, num2) {
    return str2.repeat(num2)
}

console.log(stringa('ciamo mondo' , 2));



//7. Crea una funzione che accetti un nome di città come parametro e ritorni
//il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function citta(nome) {
    if (nome.startsWith('Los') || nome.startsWith('New')){
        return nome
    } else return false
}
console.log(citta('los angeles'));


//8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array 
//con tre elementi. L’array deve essere passato come parametro.


function arraySomma(array1) {    
    if (!array1.isarray || array1.length; i++){
        throw new Error('i parametri devono essere un array di 3 elementi')
    }
    let sommaArray = 0
    for (let i = 0; < array1.length; i++) {
        sommaArray += array1[1]
    }
    return sommaArray
    }
    

//9. Crea una funzione che controlli se un array di due elementi contiene
//il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.

function dueNumeri (arrayNumeri) {
    return arrayNumeri.includes(1) || arrayNumeri(3)
}
console.log(dueNumeri([4,5]))


//10. Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3.
//Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function dueNumeri (arrayNumeri) {
    return arrayNumeri.includes(1) && !arrayNumeri.includes(3)
}
console.log(dueNumeri([4,3]))


//11. Crea una funzione per trovare la stringa più lunga in un array di stringhe.
//Passa l’array come parametro e tritorna la strtinga più lunga.

function arrayLunga (arrayStringa){
    let stringaPiuLunga = ""
    for (let i = 0 ; i < arrayStringa.length; i++){
        if ( arrayStringa.length[i] > stringaPiuLunga.length){
            stringaPiuLunga = arrayStringa[i]
        }
    }
    return stringaPiuLunga
    }
    console.log(arrayLunga(["ciao", "come va", "tutto bene"]));


//12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
//Angolo acuto: meno di 90° ⇒ ritorna “acuto”
//Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
//Angolo retto: 90° ⇒ ritorna “retto”
//Angolo piatto: 180° ⇒ ritorna “piatto”


function trovaAngolo(angolo) {
    if (angolo > 180 ){
        throw new Error (" errore l'angolo deve essere meno di 180 gradi")
    }
    if (angolo < 90) {
        return " acuto "        
    } else if (angolo === 90 ) {
        return " retto "
    } else if (angolo < 180) {
        return " ottuso "
    }else{
        return "piatto"
    }    
}
console.log(trovaAngolo(180))



//13. Crea una funzione che trovi e ritorni **l’indice** 
//di del numero più alto in un array passato come parametro.

function arrayNumeri (array){
    let partenza = array[0]
    let indicePartenze = 0
    for (let i = 0; i < array.length; i++) {
        if ( array[i] > indicepartenza){
            indicePartenze = array[1]
            indicePartenza = i
        }        
    } return partenza
}
console.log(arrayNumeri([1,2,3,4,5,6]));


//14. Crea una funzione per trovare e ritornare il 
//numero PARI più alto in un array di numeri passato come parametro.


