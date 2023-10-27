// Ejemplo top level body of modules en ES Modules: (.mjs)

import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo...");
const text = await readFile("./archivo.txt", "utf-8");
console.log("primer texto:", text);

console.log("---> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log("segundo texto:", secondText);

/*
Los EcmaScript Modules tienen el soporte de utilizar await en el cuerpo del archivo. Esto se llama top level await.
En CommonJS, esto no se puede hacer y En EcmaScript Module si se puede hacer.

Con async/await no bloquea, está siendo secuencial -> asíncrono secuencial.
Son cosas diferentes: Sincrono - Asincrono secuencial - Asincrono en paralelo.
*/
