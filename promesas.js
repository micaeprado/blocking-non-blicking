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
        nombre: 'Leonardo'
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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id); //forma de recorrer un arreglo

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para ${empleado.nombre}`);
        } else {

            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })
}


// getEmpleado(3).then(empleado => {
//     // console.log('Empleado de BD: ', empleado);
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es ${resp.salario} `);
//     }, (err) => console.log(err))
// }, (err) => console.log(err));


// PROMESAS ENCADENADAS
getEmpleado(30).then(empleado => {
        return getSalario(empleado);
    }).then(resp => {
        console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })