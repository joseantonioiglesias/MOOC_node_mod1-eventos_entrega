var date = new Date;
var minutes = date.getMinutes();
var hour = date.getHours();
console.log(hour+':'+minutes);

const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Configuracion de horas y temperaturas
const programas=[
  { hora: hour+':'+(minutes+1),
    temperatura: 22
  },
  { hora: hour+':'+(minutes+2),
    temperatura: 18
  },
  { hora: hour+':'+(minutes+3),
    temperatura: 22
  },
  { hora: hour+':'+(minutes+4),
    temperatura: 20
  }
];
// Creacion del programador
const programador = new Programador(programas);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostrar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);



// Escucha evento ideal desde programador
programador.on('ideal', (temp) =>{
  termostato.indicarTemperaturaIdeal(temp);
  console.log(`Cambio programado de temperatura ideal a ${temp.toFixed(1)}ºC`);
  climatizador.climatizar(temp);
});

// Encender el termostato:
termostato.encender();
// Encender el programador
programador.encender();
