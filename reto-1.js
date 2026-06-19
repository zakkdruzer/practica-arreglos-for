console.log("%cReto 1 · El inventario del explorador", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

let mochila = ["cuerda", "linterna", "mapa", "brújula"];

// 1) Muestra el PRIMER objeto
console.log("Primer objeto:", mochila[0]);

// 2) Muestra el ÚLTIMO objeto
console.log("Último objeto:", mochila[mochila.length - 1]);

// 3) Muestra cuántos objetos hay
console.log("Total:", mochila.length);

// 4) Cambia "mapa" por "GPS" y muestra la mochila
mochila[2] = "GPS";
console.log('Mochila: [ "' + mochila.join('", "') + '" ]');

console.log("")