// file system -> sistema de archivos en node.js
const fs = require("node:fs"); // a partir de Node 16, se recomienda poner node: antes del módulo, en este case antes de fs

const stats = fs.statSync("./archivo.txt"); // Stat lo uso para obtener la información de este archivo.

console.log(
  stats.isFile(), // si es un fichero (archivo)
  stats.isDirectory(), // si es un directorio (carpeta)
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
);
