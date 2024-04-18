class Persona {
  nombre;
  opcion;
  constructor(nombre, opcion) {
    this.nombre = nombre;
    this.opcion = opcion;
  }

  tirar() {
    let tiro = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (tiro == 0) {
      return "Piedra";
    } else if (tiro == 1) {
      return "Papel";
    } else if (tiro == 2) {
      return "Tijera";
    }
  }
  jugar(oponente) {
    let opcion = this.tirar();
    let opcion_2 = oponente.tirar();
    if (opcion == opcion_2) {
      return "Empate";
    } else if (opcion == "Piedra" && opcion_2 == "Tijera") {
      console.log(`Ganó ${this.nombre}`);
    } else if (opcion == "Tijera" && opcion_2 == "Piedra")
      console.log(`Perdió${this.nombre}`);
    else if (opcion == "Tijera" && opcion_2 == "Papel")
      console.log(`Ganó${this.nombre}`);
    else if (opcion == "Piedra" && opcion_2 == "Papel")
      console.log(`Perdió${this.nombre}`);
    else if (opcion == "Papel" && opcion_2 == "Tijera")
      console.log(`Perdió${this.nombre}`);
    else if (opcion == "Papel" && opcion_2 == "Piedra")
      console.log(`Perdió${this.nombre}`);
  }
}

Dan = new Persona("Dan");
Jesus = new Persona("Jesus");
Dan.jugar(Jesus);
Jesus.jugar(Dan);
