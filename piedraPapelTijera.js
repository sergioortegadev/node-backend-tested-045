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
  return `<p>Jugaste ${playerMove}, la computadora jugó ${computerMove}. <strong>${result}</strong></p>`;
}
const ruidoClick = new Audio("./click.mp3");
export function jugarPPT(btn, playerOption) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let player = playerOption;
      ruidoClick.play();
      document.querySelector(".ppt").innerHTML = `${jugarPiedraPapelTijera(
        player
      )}
    `;
      // console.log("Import Módulo PPT OK");
    }
  });
}
