const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    dec: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'crear un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}