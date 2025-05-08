const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// ciclo for
let peopleName = "";
for(let i = 0; i < people.length; i++) {

  const curPeople = people[i];
  /* const {name} = curPeople; // possibilità di farlo anche con destrutturazione dell'oggetto.
  peopleName += `"${name}" `; */
  peopleName += `"${curPeople.name}" `;
}

console.log(peopleName);


// ciclo for...of 
let peopleName2 = "";
for(let curPeople of people) {
 /*  const {name} = curPeople; // possibilità di farlo anche con destrutturazione dell'oggetto.
  peopleName2 += `"${name}" `; */
  peopleName2 += `"${curPeople.name}" `;
}

console.log(peopleName2);


//ciclo forEach
let peopleName3 = "";

people.forEach((curPeople) => peopleName3 += `"${curPeople.name}" `);
console.log(peopleName3);




