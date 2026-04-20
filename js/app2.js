const input = document.querySelector("#name");
const boton = document.querySelector("#enviar");
const parrafo = document.querySelector("#resultado");

boton.addEventListener("click", () => {
  const valor = input.value;
  if (valor.trim() === "") return;
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = valor;

  parrafo.after(nuevoParrafo);
  input.value = "";
  nuevoParrafo.addEventListener("click", () => {
    nuevoParrafo.remove();
  });
});
