const { log } = require("console");
const { resolve } = require("path");

require("colors");

const mostarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("============================".red);
    console.log("   Seleccione una opcion".red);
    console.log("============================".red);

    console.log(`${"1.".red} Crear tarea`);
    console.log(`${"2.".red} Listar tarea`);
    console.log(`${"3.".red} Listar tareas completadas`);
    console.log(`${"4.".red} Listar tareas pendientes`);
    console.log(`${"5.".red} Compleatr tarea(s)`);
    console.log(`${"6.".red} Borrar tarea`);
    console.log(`${"0.".red} Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Selecciones una opcion: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPresione ${"ENTER".blue} para continuar \n`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  mostarMenu,
  pausa,
};
