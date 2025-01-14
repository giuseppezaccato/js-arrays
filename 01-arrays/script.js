const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// teachers[4] = "Patrick";
teachers.splice(4, 1, "Patrick");
// ? sia la selezione **teachers[4]** che **teachers.splice(4,1, "Patrick")**
// ? hanno lo stesso effetto pratico nella sostituzione del quinto insegnante " in Patrick"
// ? perchè? 
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(teachers);
console.log(lastTeacher);
// *stampa solo ultimo insegnate, che pero ho estratto!

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(teachers);
console.log(firstTeacher);
// * stampa solo primo insegnate, che pero ho estratto!

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length !== 0; // ! al massimo due uguali (quindi !==)
// ? per avere un discorso logicamente piu giusto, avremmo dovuto dargli un'UGUAGLIANZA e non una DISUGUAGLIANZA!
// ? o al massimo mettere un'altra negazione anche nella dichiarazione della  
// ? "const isNotTeachersEmpty = teachers.length !==0"
// ? quindi const isTeachersEmpty = teachers.length === 0; (così)
//  * equivale a dargli una sequenza di IF ed ELSE sfruttando il !NOT
console.log(isTeachersEmpty);

