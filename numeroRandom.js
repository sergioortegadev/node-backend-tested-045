function randomNumber() {
  return Math.floor(Math.random() * 5682) + 1;
}
const ruidoClick = new Audio("./click.mp3");
export function nuevoNumero(btn) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      ruidoClick.play();
      document.querySelector(".insert").innerHTML = `<h2>Número random:</h2>
    <h1> ${randomNumber()}</h1>
    `;

      //console.log("Import módulo numeroRandom OK\nNúmero random: " + randomNumber()); // Ejecutar la función y mostrar el número generado en la consola.
    }
  });
}
