console.log("%cReto 2 · La fila del cajero automático", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

let fila = ["Ana", "Beto", "Carla"];

// 1) Llega Diego al final
fila.push("Diego");
console.log("Después de llegar Diego:", fila);

// 2) Llega Eva al inicio
fila.unshift("Eva");
console.log("Después de llegar Eva:", fila);

// 3) Atienden al primero
fila.shift();
console.log("Después de atender al primero:", fila);

// 4) Se va el último
fila.pop();
console.log("Después de irse el último:", fila);

// 5) La persona del medio (índice 1) abandona
fila.splice(1, 1);
console.log("Fila final:", fila);

console.log("");