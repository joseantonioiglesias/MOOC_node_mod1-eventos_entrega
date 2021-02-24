const EventEmitter = require('./events');

// Importar modulo Later.js:
const later = require('later');

// Usar zona horaria local:
later.date.localTime();

// Clase Programador.
// Su temperatura cambia aleatoriamente. (Simula el invierno o el verano)
class Programador extends EventEmitter {

	constructor(programas) {

    super();

    this.programas = programas;
  }

  encender(){
    console.log('Encendiendo el programador....');

    // recorre el array de programas
    this.programas.forEach((prog) => {
      // Obtiene la hora y la temperatura
      const { hora, temperatura } = prog;
      // emite el evento ideal al cambio de hora del pc
      const sched = later.parse.text(`at ${hora}`);
      later.setInterval(() => {
        this.emit('ideal', temperatura);
      }, sched);
    });
  }
}

  exports = module.exports = Programador;