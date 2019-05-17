let empleados = [{
        id: 1,
        nombre: 'Micaela'
    },
    {
        id: 2,
        nombre: 'Mariano'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let empleados = require('./db/usuarios.json');
let salarios = require('./db/salarios.json');

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id); //forma de recorrer un arreglo

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para ${empleado.nombre}`);
    } else {

        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    // console.log(empleado);

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es ${resp.salario} `);
    });
});