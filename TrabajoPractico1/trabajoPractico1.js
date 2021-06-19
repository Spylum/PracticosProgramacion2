
//A. Dado los equipos de futbol Boca, River, Racing, Independiente, Velez crear una función que reciba por parámetros el nombre de un equipo y verifique si es uno de esos equipos dados.

const equipos = ["Boca", "River", "Racing", "Independiente", "Velez"];

function verificarEquip (equipo) {
    if (equipos.includes(equipo)){
        return "El equipo SE ENCUENTRA en los alamcenados";
    } 
    else {
        return "El equipo NO SE ENCUENTRA en los almacenados ";
    }
}

let equipoElegido = "San Lorenzo";
console.info("A.============");
console.info(verificarEquip(equipoElegido));



//B. Crear una función que me convierta de m a Km

function conversor (metro) {
    let km = metro/1000;
    return km;
}

let metro = 3000;
console.info("B.============")
console.info(`La distancia de ${metro}m a km es de ${conversor(metro)}km`);



// C. Dado el arreglo (2,5,7,8,9)

const nros = [8,5,2,8,1,9,1];

// 1. Crear una función que cuente la cantidad de elementos en el arreglo
function contarNumeros (numeros) {
    console.log(numeros.length);
}
console.log("C.1.============")
contarNumeros(nros);

// 2. Crear una función que sume todos los elementos de arreglo
function suma (numeros) {
    total = 0
    for(let i = 0; i < numeros.length; i++) {
        total += numeros[i];     
    }
    console.log(total);
}
console.log("C.2.============")
suma(nros);


//3. Crear una función que me devuelva los elementos ordenados del arreglo

function orden (numeros) {
    ordenados = []
    for(let i = 0; i < numeros.length; i++) {
        ordenados = numeros.sort();
    }
    console.log(ordenados)
}
console.log("C.3.============")
orden(nros);