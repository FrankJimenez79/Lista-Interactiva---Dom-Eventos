const boton = document.querySelector("#btn");
const input = document.querySelector("#tarea");
const ul = document.querySelector("#lista");

boton.addEventListener("click", (e) => {
  const valor = input.value;
  if (valor === "") return;
  const li = document.createElement("li");
  li.textContent = valor;

  ul.append(li);
  li.addEventListener("click", () => {
    li.style.color = "red";
  });
  li.addEventListener("dblclick", () => {
    li.remove();
  });
  input.value = "";
});
