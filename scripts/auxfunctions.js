function calcularCuotaMensual(prestamo, i, n) {
  let aux = Math.pow(1 + i, n);
  let cuota = prestamo * ((aux * i) / (aux - 1));
  return Math.round(cuota);
}

export { calcularCuotaMensual };
