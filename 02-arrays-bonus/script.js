const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// * 2.1 metodo con FOR e IF + PUSH (per eliminare eventuali spazi vuoti)
const longNamesA = [];
for (let i = 0; i < teachers.length; i++) {
  // * Se la lunghezza del nome è maggiore o uguale a 5, lo aggiungiamo a longNames
  if (teachers[i].length >= 5) {
    longNamesA.push(teachers[i]);
  }
}
console.log(longNamesA);

// ! 2.2 FILTER() method con arrow function
//* Il metodo filter() è spesso considerato più elegante e funzionale rispetto all'approccio con il ciclo for.
//* Entrambi i metodi rispettano il requisito di non modificare l'array originale teachers.
const longNamesB = teachers.filter(teacher => teacher.length >= 5);
console.log(longNamesB);


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(-2, 1);
// ! metodo delete() sconsigliato perchè causa buchi "undefined"
// ! è sempre meglio usare pop() o shift() al suo posto! 
// delete teachers[5];
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);

//*4.1 Verifica con ciclo For senza l'uso di .includes
let isFabioPresent1 = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent1 = true;
    break; // Usciamo dal ciclo non appena troviamo Fabio
  }
}
console.log(`Fabio è presente? => ${isFabioPresent}`);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(" - "); //* join(separator) è una sorta di "evoluzione" del .toString()
const teachersStringI = teachers.toString();
console.log(teachersString);
console.log(teachersStringI)