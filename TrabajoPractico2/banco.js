class CuentaBancaria {
    constructor (fondos, agregar, sacar) {
        this.fondos = fondos;
        this.agregar = agregar;
        this.sacar = sacar;
    }

    asignarFondos () {
        if (this.agregar >= 5000000) {
            console.info("ERROR. No se puede asignar mas de 500000 a los fondos existentes");
        }
        else {
            console.info (this.fondos + this.agregar);
        }
    }

    sacarFondos () {
        if (this.sacar >= 100000) {
            console.info("ERROR. No se puede sacar mas de 100000");
        }
        else {
            if (this.sacar > this.fondos) {
            console.info("ERROR. No se puede sacar mas dinero de lo que hay en los fondos");
            }
            else {
                console.info (this.fondos - this.sacar);
            }
        }
    }  
}

const cuenta1 = new CuentaBancaria (10000, 5000, 110000);
const cuenta2 = new CuentaBancaria (10000, 5000000, 3000 );
const cuenta3 = new CuentaBancaria (10000, 600, 50000);


cuenta1.asignarFondos();
cuenta1.sacarFondos();

console.info("=============================================================")

cuenta2.asignarFondos();
cuenta2.sacarFondos();

console.info("=============================================================")

cuenta3.asignarFondos();
cuenta3.sacarFondos();
