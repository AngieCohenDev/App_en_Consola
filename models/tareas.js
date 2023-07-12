const Tarea = require("./tarea");
require('colors');

class Tareas {

    _listado = {};

    get ListadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;

    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea; 
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea; 
    }

    listadoCompleto(){

        this.ListadoArr.forEach((tarea, i)=>{

            const idx = `${i + 1}`.cyan;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? 'Completada'.green : 'Pendiente'.red;
            
            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(completadas = true){
        console.log();
        let contador = 0;
        this.ListadoArr.forEach(tarea => {

            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? 'Completada'.green : 'Pendiente'.red;
            if (completadas){
                //mostar completadas
                if(completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                }
            }else{
                //mostar pendientes
                if (!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').red} ${desc} :: ${estado}`)
                }

            }

        })
    }
}

module.exports = Tareas;