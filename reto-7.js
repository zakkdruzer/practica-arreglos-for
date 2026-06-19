console.log("%cReto 7 · La caja registradora", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

let ventas = [3000, 5500, 1200, 8000];

// ================================
// VERSIÓN 1: con reduce
// ================================
let totalReduce = ventas.reduce((acum, v) => acum + v, 0);
let promedioReduce = totalReduce / ventas.length;

console.log("— Versión con reduce —");
console.log("Total:", totalReduce);
console.log("Promedio:", promedioReduce);

// ================================
// VERSIÓN 2: con for + acumulador
// ================================
let totalFor = 0;
for (let i = 0; i < ventas.length; i++) {
  totalFor += ventas[i];
}
let promedioFor = totalFor / ventas.length;

console.log("");
console.log("— Versión con for + acumulador —");
console.log("Total:", totalFor);
console.log("Promedio:", promedioFor);

console.log("");