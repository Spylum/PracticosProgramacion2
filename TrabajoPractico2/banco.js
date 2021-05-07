class CuentaBancaria {
    constructor (fondos, agregar, sacar) {
        this.fondos = fondos;
        this.agregar = agregar;
        this.sacar = sacar;
    }

    asignarFondos () {
        if (this.agregar >= 5000000) {
            console.info("No se puede asignar mas de 500000 a los fondos existentes");
        }
        return this.fondos + this.agregar;
    }

    sacarFondos () {
        if (this.sacar >= 100000) {
            console.info("No se puede sacar mas de 100000")
        }
        else {
            if (this.sacar > this.fondos) {
            console.info("No se puede mas dinero que lo que hay en los fondos");
            }
            else {
                return this.fondos - this.sacar;
            }
        }
    }  
}

const cuenta1 = new CuentaBancaria (10000, 5000, 110000);
const cuenta2 = new CuentaBancaria (10000, 5000000, 3000 );
const cuenta3 = new CuentaBancaria (10000, 6000, 5000);


console.info(cuenta1.asignarFondos());
console.info(cuenta1.sacarFondos());
