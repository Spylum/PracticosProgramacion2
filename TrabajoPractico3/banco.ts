class CuentaBancaria {
    constructor (public fondos: number, public agregar: number, public sacar: number) {
        
    }
    // metodo para asignar fondos
    asignarFondos () {
        if (this.agregar >= 5000000) {
            console.info("ERROR. No se puede asignar mas de 500000 a los fondos existentes");
        }
        else {
            console.info (this.fondos + this.agregar);
        }
    }
    // metodo para sacar fondos
    sacarFondos () {
        // si sacar es mayor o igua a 100000 se imprime un error debido a que no se puede
        if (this.sacar >= 100000) {
            console.info("ERROR. No se puede sacar mas de 100000");
        }
        else {
            // si sacar es mayor a los fondos se impirme un error, porque no se puede sacar mas dinero del que hay en los fondos
            if (this.sacar > this.fondos) {
            console.info("ERROR. No se puede sacar mas dinero de lo que hay en los fondos");
            }
            else {
                console.info (this.fondos - this.sacar);
            }
        }
    }  
}
// creacion de 3 cuentas 
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