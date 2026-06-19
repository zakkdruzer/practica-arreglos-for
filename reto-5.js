console.log("%cReto 5 · El filtro de aprobados", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

let notas = [3.5, 6.0, 4.2, 2.8, 7.0, 5.5];

// 1) Filtra solo las notas >= 4.0
let aprobadas = notas.filter((nota) => nota >= 4.0);

// 2) Muestra el arreglo filtrado y cuántas son
console.log("Aprobadas:", aprobadas);
console.log("Cantidad:", aprobadas.length);

console.log("");