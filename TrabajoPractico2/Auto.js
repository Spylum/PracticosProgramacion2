class Auto {
    constructor(marca, modelo, potencia, maxVelocidad) {
        this.marca = marca;
        this.modelo = modelo; 
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }
    // metodo para mostrar los autos
    mostrarAuto() {
        console.info(`El Auto es un ${this.marca}, ${this.modelo}, tiene una potencia de ${this.potencia} hp y su velocidad max. es de ${this.maxVelocidad} km/h.`)
    }
    // metodo para calcular el tiempo en su velocidad máxima
    calcularTiemp () {
        let tiempo = km /this.maxVelocidad;
        console.info(`El auto ${this.modelo} recorrio ${km} km en ${tiempo.toFixed(2)} hs a su velocidad máxima.`)
        
        
    }
}
let km = 250

// se cera un array con los autos
const autos = [new Auto("Chevrolet","Camaro",294,170), 
               new Auto("Ford","Mustang",290,173), 
               new Auto("Audi","R8",285,178), 
               new Auto("BMW","Serie 4",290,175), 
               new Auto("Porsche","Carrera",280,176)];

for (let i of autos) {
        // se muestran los autos por pantalla
        i.mostrarAuto();
        //si los km son igual a 0 se imprime un error
        if (km == 0) {
            i.calcularTiemp();
            console.info("El auto no se ha movido")  
        }
        else{
        // se calcula el tiempo en recorrer en su velocidad maxima
            i.calcularTiemp();
        }

    //salto de linea improvisado
    console.info(" ")

}
// si el valor de los km son de otro tipo de dato que no sea un number, se imprime un error
if (typeof km != "number") {
    console.info("Los kilometros se tiene que ingresar con numeros")

}

