const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


// ciclo for
let strName = "";
for(let i = 0; i < names.length; i++) {

    const name = names[i];
    strName += `"${name}" `;
}

console.log(strName);



// ciclo for...of
let strName2 = "";

for(let name of names) {

    strName2 += `"${name}" `;
}

console.log(strName2);


// metodo forEach
let strName3 = "";
names.forEach((name) => strName3 += `"${name}" `);
console.log(strName3);







