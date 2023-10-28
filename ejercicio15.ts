const filas:number = 10;
const columnas:number = 10;

// Patrón para las estrellas y las líneas
const patronEstrella:string = "* ".repeat(columnas);
const patronLinea:string = "= ".repeat(columnas);

// Generación del patrón
let salida:string = "";
for (let fila:number = 1; fila <= filas; fila++) {
    if (fila % 2 === 0) {
        salida += patronLinea + "\n";
    } else {
        salida += patronEstrella + "\n";
    }
}

// Imprimir la salida
console.log(salida);

