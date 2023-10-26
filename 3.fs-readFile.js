const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  // <----- ejecutas este callback
  /* Quiero que leas archivo.txt, que lo codifique con utf-8, y que cuando termines de leerlo sigas ejecutando el callback, pero mientras sigue ejecutando lo de abajo "Hacer cosas mientras lee el archivo" y etc, no esperes. Cuando termine, ejecuta el callback. */
  console.log("primer texto:", text);
}); /*  Por defecto devuelve un buffer (memoria con información y bytes que no entendemos ni podemos leer). Por eso incluimos utf-8 para convertirlo a un sistema que nosotros podemos entender. Codificacion utf-8 para no tener problema con acentos. */

console.log("---> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("segundo texto:", text);
});

// método readFileSync: para leer archivos de forma síncrona.
// método readFile: para leer archivos de forma asíncrona. Al ser asíncrono, el readFile acepta como tercer parámetro un callback.
