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
    return fs.readFileSync(path, "utf8");
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
}

agregarTarea = function (object) {
    let arregloJSON = JSON.parse(fs.readFileSync(path, 'utf-8'));
    arregloJSON.push(JSON.parse(JSON.stringify(object)));
    fs.writeFileSync(path, JSON.stringify(arregloJSON));
    let valor = this.leerTareas();
    // console.log(!valor==2);
    // console.log('Tiene que ser False : ' + !valor.length);
    /*
        Registra y guarda una nueva tarea.
    */
}

filtrarTareasPorEstado = function (estado) {
    return JSON.parse(this.leerTareas()).filter( elemento => elemento.status === estado );
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
}

module.exports = {
    leerTareas,
    agregarTarea,
    filtrarTareasPorEstado
};