import { calcularCuotaMensual } from "./auxfunctions.js";
const boton = document.getElementById("enviar");
const boton2 = document.getElementById("desplegarTodos");
const boton3 = document.getElementById("request");
const combo = document.getElementById("combo");

boton.addEventListener("click", reciboUsuario);
boton2.addEventListener("click", desplegarTodo);
combo.addEventListener("change", request);

let clientes = [];

function reciboUsuario() {
  let res = "";
  const nombre = document.getElementById("nombre").value;
  const prestamo = parseFloat(document.getElementById("prestamo").value);
  const meses = parseInt(document.getElementById("meses").value);
  const interes = parseFloat(document.getElementById("interes").value);
  if (nombre === "" || prestamo === NaN || meses === NaN || interes === NaN) {
    res = "ERROR";
  } else {
    let cuota = calcularCuotaMensual(prestamo, interes, meses);
    res =
      nombre +
      " debe de pagar $" +
      cuota +
      " por el préstamo de $" +
      prestamo +
      " a " +
      meses +
      " meses con el interés de: " +
      interes +
      "%";

    document.getElementById("resultado").textContent = res;
    clientes.push({ nombre, prestamo, meses, interes, cuota });
    console.log(clientes);
  }
}

function desplegarTodo() {
  let answer = "";
  clientes.forEach(
    (x) =>
      (answer +=
        "\n-- Nombre: " +
        x.nombre +
        " Préstamo: $" +
        x.prestamo +
        " meses: " +
        x.meses +
        " Interés: " +
        x.interes +
        " Con una cuota de: $" +
        x.cuota +
        "\n")
  );

  document.getElementById("resultado").textContent = answer;
}

function request() {
  let res = "";
  let obj;
  if (this.value === "req1") {
    let answ = 0;
    clientes.forEach((x) => (answ += x.cuota));
    res = "La sumatoria de las cuotas es de: $" + answ;
  } else if (this.value === "req2") {
    obj = clientes.filter((x) => x.cuota > 300000);
    if (obj.length === 0) {
      res = "No encontramos usuarios con esa funcionalidad";
    } else {
      res =
        "Nombre: " +
        obj[0].nombre +
        " Préstamo de: $" +
        obj[0].prestamo +
        " en " +
        obj[0].meses +
        " meses, con una cuota de $" +
        obj[0].cuota +
        " con el interés del " +
        obj[0].interes +
        "%";
    }
  } else if (this.value === "req3") {
    obj = clientes.filter((x) => x.meses < 12);
    console.log(obj);
    if (obj.length === 0) {
      res = "No encontramos usuarios con esa funcionalidad";
    } else {
      res =
        "Nombre: " +
        obj[0].nombre +
        " Préstamo de: $" +
        obj[0].prestamo +
        " en " +
        obj[0].meses +
        " meses, con una cuota de $" +
        obj[0].cuota +
        " con el interés del " +
        obj[0].interes +
        "%";
    }
  } else if (this.value === "req4") {
    obj = clientes.find((x) => x.prestamo > 5000000);
    if (obj === undefined) {
      res = "No encontramos usuarios con esa funcionalidad";
    } else {
      res =
        "Nombre: " +
        obj.nombre +
        " Préstamo de: $" +
        obj.prestamo +
        " en " +
        obj.meses +
        " meses, con una cuota de $" +
        obj.cuota +
        " con el interés del " +
        obj.interes +
        "%";
    }
  } else if (this.value === "req5") {
    res = clientes.find((x) => x.interes < 2);
    if (obj === undefined) {
      res = "No encontramos usuarios con esa funcionalidad";
    } else {
      res =
        "Nombre: " +
        obj.nombre +
        " Préstamo de: $" +
        obj.prestamo +
        " en " +
        obj.meses +
        " meses, con una cuota de $" +
        obj.cuota +
        " con el interés del " +
        obj.interes +
        "%";
    }
  } else if (this.value === "req6") {
    res = clientes.map((x) => x.cuota + 90000);
  } else if (this.value === "req7") {
    res = clientes.map((x) => x.prestamo - 90000);
  } else if (this.value === "req8") {
    res = clientes.map((x) => x.cuota);
  }
  document.getElementById("resultado").textContent = res;
}
