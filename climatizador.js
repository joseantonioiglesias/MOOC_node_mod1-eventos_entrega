

// Cuanto subimos o bajamos la temperatura
const DELTA = 0.1;


// Clase Climatizador.
// Modifica la temperatura de una habitacion.
// Metodos:
//    enfriar
//    calentar
class Climatizador {

	constructor(habitacion) {

		this.habitacion = habitacion;
	}

	enfriar() {
		console.log('Enfriando.')
        this.habitacion.temperatura -= DELTA;
	}

	calentar() {
		console.log('Calentando.')
        this.habitacion.temperatura += DELTA;
	}

  climatizar(temp){
    this.temp=temp;
    this.habitacion.temperatura=this.temp;
    console.log(`Aplicando climatización a ${temp.toFixed(1)}ºC`);
  }
}

exports = module.exports = Climatizador;
