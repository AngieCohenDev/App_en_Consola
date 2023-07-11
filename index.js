const { mostarMenu, pausa } = require('./helpers/mensaje');

require('colors');
console.clear();

const main = async() =>{
    console.log('Hola');

    mostarMenu(); 
    
    //pausa();
}

main();