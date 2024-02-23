function calcularCuotaMensual(prestamo, interesMensual, meses) {

  interesMensual = interesMensual / 100;

  let aux = Math.pow(1 + interesMensual, meses);
  let cuota = prestamo * ((aux * interesMensual) / (aux - 1));
  return Math.round(cuota);
}

module.exports={calcularCuotaMensual}
