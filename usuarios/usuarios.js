function getUsuarioSync(id) {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
        //espera......
        //hace e fetch de bd
    }

    return {
        id,
        nombre: `Usuario${id}`
    };
}

function getNombreSync() {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
        //espera......
        //hace e fetch de bd
    }

    return 'Micaela';
}

function saludarSync() {
    let nombre = getNombreSync();

    return `Hola ${nombre}`;
}

//CALLBACK

let getUsuario = (id, callback) => {
    let usuario = {
        id,
        nombre: `Usuario${id}`
    }

    //esperando
    //haciedno el fetch de la bd

    setTimeout(() => callback(usuario), 3000);
}

//PROMESA

// resolve : Contiene el resultado de la función que se está ejecutando dentro de la promesa.

// reject : Contiene la respuesta de error siempre y cuando no se pueda resolver la promesa.

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Micaela');
        }, 3000);

    });
}

// ASYNC - AWAIT
let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

module.exports = {
    getUsuarioSync,
    getUsuario,
    saludo,
    saludarSync
};