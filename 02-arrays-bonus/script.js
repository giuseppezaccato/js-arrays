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
const longNamesB = teachers.filter(teacher => teacher.length >= 5);
console.log(longNamesB);


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(-2, 1);
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(" - ");
console.log(teachersString);