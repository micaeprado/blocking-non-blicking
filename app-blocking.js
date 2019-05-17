let { getUsuarioSync, saludarSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');

let saludo = saludarSync();
console.log(saludo);

let usuario1 = getUsuarioSync(1);
console.log('Usuario 1: ', usuario1);

let usuario2 = getUsuarioSync(2);
console.log('Usuario 2: ', usuario2);

console.log('Fin del programa');