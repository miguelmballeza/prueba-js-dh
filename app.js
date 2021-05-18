/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
const path = './tareas.json';
exports.leerTareas = function () {
    return fs.readFileSync(path, 'utf-8');
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
}

exports.agregarTarea = function (object) {
    console.log(JSON.stringify(object));
    let arregloJSON = JSON.parse(fs.readFileSync(path, 'utf-8').toString());
    console.log('Arreglo : ' + arregloJSON.length);
    let resultado = arregloJSON.push(JSON.stringify(object));
    fs.writeFileSync(path, resultado);
    /*
        Registra y guarda una nueva tarea.
    */
}

exports.filtrarTareasPorEstado = function (estado) {
    return JSON.parse(leerTareas()).filter( elemento => elemento.status === estado );
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
}