const { readFile } = require("node:fs/promises");

/* IIFE - Immediately Invoked Function Expression
Función anónima envuelta en paréntesis y luego se auto invoca después. Justo después de crearla.
Segundos parentesis invocan a la función. Se llama automáticamente.
*/
(async () => {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("primer texto:", text);

  console.log("---> Hacer cosas mientras lee el archivo...");

  console.log("Leyendo el segundo archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo texto:", secondText);
})();
