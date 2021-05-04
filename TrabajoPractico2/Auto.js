class Auto {
    constructor(marca, modelo, potencia, maxVelocidad) {
        this.marca = marca;
        this.modelo = modelo; 
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }
    
    mostrarAuto() {
        return `El Auto es un ${this.marca}, ${this.modelo}, tiene una potencia de ${this.potencia} hp y su velocidad max. es de ${this.maxVelocidad} km/h.`
    }

    
    calcularTiemp () {
        let tiempo = 250/this.maxVelocidad;
        // 250  es la distancia que recorre a su maxima velociadad. 
        return `El auto ${this.modelo} recorrio 250 km en ${tiempo.toFixed(2)} hs a su velocidad máxima.`
    }
}



module.exports = Auto;