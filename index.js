import { nuevoNumero } from "./numeroRandom.js";
import { jugarPPT } from "./piedraPapelTijera.js";

document.addEventListener("DOMContentLoaded", (e) => {
  nuevoNumero(".btn-numero");
  jugarPPT(".btn-jugar-piedra", "piedra");
  jugarPPT(".btn-jugar-papel", "papel");
  jugarPPT(".btn-jugar-tijera", "tijera");
});
