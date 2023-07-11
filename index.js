const { mostarMenu, pausa } = require('./helpers/mensaje');

require('colors');
console.clear();

const main = async() =>{
    console.log('Hola');

    let opt = '';

    do {
        opt = await mostarMenu(); 
        console.log({opt});

        if(opt !== '0') await pausa();
    } while (opt !== '0');

    
    //pausa();
}

main();