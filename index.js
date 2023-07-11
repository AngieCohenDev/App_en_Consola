require('colors');

const { inquirerMenu,pausa, leerImput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() =>{
    console.log('Hola');

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu(); 
        
        switch (opt) {
            case '1':
                const desc = await leerImput('Descripcion: ');
                tareas.crearTarea(desc);
            break;
            
            case '2':
                console.log(tareas._listado);
            break;
        }

        await pausa();
    } while (opt !== '0');

    
    //pausa();
}

main();