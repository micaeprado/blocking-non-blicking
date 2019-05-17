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


// async : Permite identificar que una funcion sera síncrona.

// await : Esto nos indicará donde se genera la pausa del flujo del programa.

let getEmpleado = async(id) => {

    let empleadoDB = await empleados.find(empleado => empleado.id === id); //forma de recorrer un arreglo

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }

}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para ${empleado.nombre}`);
    } else {

        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}



// PROMESAS ENCADENADAS
getEmpleado(1).then(empleado => {
        return getSalario(empleado);
    }).then(resp => {
        console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })