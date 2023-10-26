/*
Esto sólo en los módulos nativos que no tienen promesas nativas.

const { promisify } = require("node:util");
const readFilePromise = promisify(fs.readFile);

Transformar de callback a promesa: Crea la versión de promesas.
Esta utilidad de promisify solo se utiliza para los casos en los que NO hay una versión con promesas. Pero obviamente, siempre que se pueda hay que utilizar el nativo /promises que ya viene preparado para promesas.

fs.readFilePromise("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto:", text);
}); */

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto:", text);
});

console.log("---> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto:", text);
});

// Las promesas también son códgio asíncrono. Pasa lo mismo que con los callbacks.
