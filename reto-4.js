console.log("%cReto 4 · Poción de doble poder", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

let puntajes = [10, 25, 40, 55];

// 1) Crea un arreglo nuevo con cada puntaje x2
let dobles = puntajes.map((p) => p * 2);

// 2) Muestra el nuevo y el original
console.log("Dobles:", dobles);
console.log("Original:", puntajes);

console.log("");