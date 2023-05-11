function nuevoNumero() {
  document.querySelector(".insert").innerHTML = "";

  document.querySelector(
    ".insert"
  ).innerHTML = `<h2 style="display: inline; color: #dd2; padding: 0.5rem 1rem; margin: 0.5rem; background-color: #444; border-radius: 0.25rem" >Número random:</h2>
<h1 style="display: inline; color: #d3e; padding: 0.5rem 1rem; margin: 0.5rem; background-color: #444; border-radius: 0.25rem"> ${randomNumber()}</h1>
`;
  document
    .querySelector(".insert")
    .setAttribute(
      "style",
      "background-color: #111; padding: 2rem; margin: 3rem auto 0"
    );
}

function randomNumber() {
  return Math.floor(Math.random() * 5682) + 1;
}

console.log("Número random: " + randomNumber()); // Ejecutar la función y mostrar el número generado en la consola.

/* - - Piedra Papel Tijera - -  */

function jugarPPT(playerMove) {
  document.querySelector(".ppt").innerHTML = "";

  /* let playerMove = prompt("Elija piedra, papel o tijera"); */

  console.log(jugarPiedraPapelTijera(playerMove));

  document.querySelector(
    ".ppt"
  ).innerHTML = `<h4 style="display: inline; color: #1a3; 1rem; margin: 0.5rem; border-radius: 0.25rem; font-family: 'Courier New', Courier, monospace;"> ${jugarPiedraPapelTijera(
    playerMove
  )}</h4>
`;
  document
    .querySelector(".ppt")
    .setAttribute(
      "style",
      "background-color: #111; padding: 2rem; margin: 3rem auto 0"
    );
}

function jugarPiedraPapelTijera(playerMove) {
  // Escoger movimiento al azar para la computadora
  const moves = ["piedra", "papel", "tijera"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  // Comparar movimientos y determinar ganador
  let result;
  if (playerMove === computerMove) {
    result = "Empate";
  } else if (
    (playerMove === "piedra" && computerMove === "tijera") ||
    (playerMove === "papel" && computerMove === "piedra") ||
    (playerMove === "tijera" && computerMove === "papel")
  ) {
    result = "¡Ganaste!";
  } else {
    result = "Lo siento, perdiste.";
  }

  // Retornar el resultado
  return `Jugaste ${playerMove}, la computadora jugó ${computerMove}. ${result}`;
}
