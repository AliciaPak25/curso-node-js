import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("primer texto:", text);
  console.log("segundo texto:", secondText);
});

/*
Lo bueno es que esto va a ser más rápido porque estamos haciendo dos trabajos en paralelo.
En el otro código, estabamos leyendo primero un archivo y luego leíamos el segundo archivo -> asincrono secuencial.
Asincrono secuencial: Mientras se lee el archivo, ese proceso está desbloqueado, pero lo está esperando igualmente. No está haciendo nada, no está aprovechando estar libre.
Asincrono en paralelo: Lee los dos archivos y cuando termina de leerlos, entonces continúa.
*/
