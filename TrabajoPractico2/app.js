const Auto = require("./Auto");

const camaro = new Auto("Chevrolet","Camaro",294,170);
const mustang = new Auto("Ford","Mustang",290,173);
const r8 = new Auto("Audi","R8",285,178);
const serie4 = new Auto("BMW","Serie 4",290,175);
const carrera = new Auto("Porsche","Carrera",280,176);

console.info(camaro.mostrarAuto());
console.info(mustang.mostrarAuto());
console.info(r8.mostrarAuto());
console.info(serie4.mostrarAuto());
console.info(carrera.mostrarAuto());

console.info("=============================================================")

console.info(camaro.calcularTiemp());
console.info(mustang.calcularTiemp());
console.info(r8.calcularTiemp());
console.info(serie4.calcularTiemp());
console.info(carrera.calcularTiemp());