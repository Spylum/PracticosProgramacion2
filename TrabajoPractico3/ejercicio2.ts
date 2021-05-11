function mostrarArray (array: string[]) {
    for(let v of array) {
        console.info(v);
    }
}

const arrayNum: string[] = ["azul", "verde", "rojo"];
mostrarArray(arrayNum);
console.info("--------------------------")
arrayNum.splice(1,0, "amarillo");
mostrarArray(arrayNum);
console.info("--------------------------")
arrayNum.splice(3,0, "naranja");
mostrarArray(arrayNum);
