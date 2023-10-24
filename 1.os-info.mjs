// const os = require('os') Desde la versión 16 de Node ya no es recomendable utilizar el nombre del modulo nativo
import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
} from "node:os"; // Lo recomendable es utilizar el prefijo node: y el módulo nativo
// os nos da información de nuestro sistema operativo

console.log("Información del sistema operativo:");
console.log("--------------------");

console.log("Nombre del sistema operativo", platform());
console.log("Versión del sistema operativo", release());
console.log("Arquitectura", arch());
console.log("CPUs", cpus()); // <--- con esto vamos a poder escalar procesos en Node.js
console.log("Memoria libre", freemem() / 1024 / 1024);
console.log("Memoria total", totalmem() / 1024 / 1024);
console.log("uptime", uptime() / 60 / 60);
