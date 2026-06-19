console.log("%cReto 6 · El detective de usuarios", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

let usuarios = ["ana_22", "beto_99", "carla_07"];

// 1) ¿Existe "beto_99"?
console.log("¿Existe beto_99?:", usuarios.includes("beto_99"));

// 2) ¿Posición de "carla_07"?
console.log("Posición de carla_07:", usuarios.indexOf("carla_07"));

// 3) Primer usuario que contiene "_0"
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].includes("_0")) {
    console.log("Primero con \"_0\":", usuarios[i]);
    break;
  }
}

console.log("");