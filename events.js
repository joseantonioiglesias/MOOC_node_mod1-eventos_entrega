class EventEmitter {
  constructor() {
    this.escuchadores = {};
  }

  on(evento, escuchador) {
    if (!this.escuchadores[evento]) {
      this.escuchadores[evento] = [];
    }
    this.escuchadores[evento].push(escuchador);
  }

  emit(evento, args) {
    let escuchador = this.escuchadores[evento];
    escuchador.forEach((esc) => {
      esc(args);
    });
  }
}

exports = module.exports = EventEmitter;