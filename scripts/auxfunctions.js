

module.exports={
  calcularCuotaMensual: function (prestamo, interesMensual, meses) {

    interesMensual = interesMensual / 100;
  
    let aux = Math.pow(1 + interesMensual, meses);
    let cuota = prestamo * ((aux * interesMensual) / (aux - 1));
    return Math.round(cuota);
  },
  
  subirHTML: function (nombre,prestamo,meses,interes,cuota){
    return ` <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora de Cuota Mensual</title>
    <script type="module" src="./scripts/main.js"></script>
    <link rel="stylesheet" href="./style.css" >
  </head>
  <body>
    <div>
      <form method = "post" id="main" action="/calculaIMC" enctype="application/x-www-form-urlencoded">
        <div>
          <h1>Nombre:</h1>
          <input id="nombre" placeholder="Nombre"  name="nombre"/>
        </div>
        <div>
          <h1>Préstamo:</h1>
          <input id="prestamo" placeholder="$"name="prestamo" />
        </div>
        <div>
          <h1>Meses:</h1>
          <input id="meses" name="meses" placeholder="5 meses"/>
        </div>
        <div>
          <h1>Interés:</h1>
          <input id="interes" placeholder="5%" name="interes"/>
          <br />
          <br />
        </div>
        <div>
          <textarea id="resultado" readonly cols="50">
El cliente:${nombre}
pidió un préstamo de: $${prestamo} pesos
con un interés del ${interes}% durante ${meses} meses
Cuota: $${cuota} pesos
</textarea>
            <br/><br/>
        </div>
        <button id="enviar" type="submit">Enviar!</button>
    </form>
    </div>
  </body>
  </html`
  }
}
