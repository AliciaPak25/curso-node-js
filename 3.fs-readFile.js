const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
const text = fs.readFile(
  "./archivo.txt",
  "utf-8"
); /*  Por defecto devuelve un buffer (memoria con información y bytes que no entendemos ni podemos leer). Por eso incluimos utf-8 para convertirlo a un sistema que nosotros podemos entender. Codificacion utf-8 para no tener problema con acentos. */

console.log(text);

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFile("./archivo2.txt", "utf-8");

console.log(secondText);

// método readFileSync: para leer archivos de forma síncrona.
// método readFile: para leer archivos de forma asíncrona.
