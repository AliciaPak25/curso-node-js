// const os = require('os') Desde la versión 16 de Node ya no es recomendable utilizar el nombre del modulo nativo
const os = require("node:os"); // Lo recomendable es utilizar el prefijo node: y el módulo nativo
// os nos da información de nuestro sistema operativo

console.log("Información del sistema operativo:");
console.log("--------------------");

console.log("Nombre del sistema operativo", os.platform());
console.log("Versión del sistema operativo", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus()); // <--- con esto vamos a poder escalar procesos en Node.js
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60);
