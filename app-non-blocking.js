let { getUsuario, saludo } = require('./usuarios/usuarios');

console.log('Inicio de programa');

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(err);
    })

// then : Se ejecuta cuando la promesa es resuelta satisfactoriamente, tambien nos permite encolar código, esto lo podremos apreciar en el ejemplo que realizaremos.
// catch : Se ejecuta cuando la promesa no puede resolverse de una manera satisfactoria podríamos decir cuando surge un error.

getUsuario(1, (usuario1) => {
    console.log('Usuario 1: ', usuario1)
});

getUsuario(2, (usuario2) => console.log('Usuario 2: ', usuario2));

console.log('Fin del programa');