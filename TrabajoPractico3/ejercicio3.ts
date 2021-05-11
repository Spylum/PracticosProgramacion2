function mostArray (array: string[]) {
    for(let v of array) {
        console.info(v);
    }
}

const array: string[] = ["azul", "verde", "rojo"];
mostArray(array);
console.info("--------------------------")
// elimino un elemento desde la posicion -2
array.splice(array.length - 2, 1);
mostArray(array);
