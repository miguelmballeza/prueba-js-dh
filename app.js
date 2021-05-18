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
leerTareas = function () {
    let objeto = fs.readFileSync(path, "utf8");
    return JSON.parse(objeto);
}

agregarTarea = function (object) {
    let arregloJSON = JSON.parse(fs.readFileSync(path, 'utf-8').toString());
    arregloJSON.push(object);
    fs.writeFileSync(path, JSON.stringify(arregloJSON));
}

filtrarTareasPorEstado = function (estado) {
    return (this.leerTareas()).filter( elemento => elemento.status === estado );
}

module.exports = {
    leerTareas,
    agregarTarea,
    filtrarTareasPorEstado
};