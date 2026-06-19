console.log("%c🏆 Reto Final · El Torneo de la Academia", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

let nombres  = ["Sora", "Kai", "Luna", "Max", "Nia"];
let puntajes = [120, 85, 200, 60, 150];

// Paso 1: Muestra cuántos jugadores compiten
console.log("Total de jugadores:", nombres.length);

// Paso 2: Con un for, muestra "nombre: puntaje" de cada jugador
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i] + ": " + puntajes[i]);
}

// Paso 3: Calcula el puntaje total y el promedio
let total = puntajes.reduce((acum, v) => acum + v, 0);
let promedio = total / puntajes.length;
console.log("Puntaje total:", total);
console.log("Promedio:", promedio);

// Paso 4: Encontrar el puntaje máximo
let maximo = Math.max(...puntajes);
console.log("Puntaje máximo:", maximo);

// Paso 5: Arma una lista con los puntajes que superan el promedio
let sobreElPromedio = puntajes.filter((p) => p > promedio);
console.log("Sobre el promedio:", sobreElPromedio);

// Paso 6: Muestra el ranking de puntajes ordenados de mayor a menor
let ranking = puntajes.sort((a, b) => b - a);
console.log("Ranking:", ranking);

// Paso 7: Bonus - muestra el nombre del ganador (el del puntaje máximo)
let indiceGanador = puntajes.indexOf(maximo);
console.log("🏆 Ganador:", nombres[indiceGanador]);

console.log("");