require("colors");

const {
  inquirerMenu,
  pausa,
  leerImput,
  listadoTareasBorrar,
  confirmar,
} = require("./helpers/inquirer");
const { guardarDB, leerDb } = require("./helpers/saveFile");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

//console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDb();
  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerImput("Descripcion: ");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        tareas.listarPendientesCompletadas(true);
        break;

      case "4":
        tareas.listarPendientesCompletadas(false);
        break;

      case "6":
        const id = await listadoTareasBorrar(tareas.ListadoArr);
        if (id !== "0") {
          const si = confirmar("¿Esta seguro?");
          if (si) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
        }

        break;
    }

    guardarDB(tareas.ListadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
