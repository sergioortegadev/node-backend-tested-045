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
