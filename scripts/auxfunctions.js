module.exports = {
  calcularCuotaMensual: function (prestamo, interesMensual, meses) {
    interesMensual = interesMensual / 100;

    let aux = Math.pow(1 + interesMensual, meses);
    let cuota = prestamo * ((aux * interesMensual) / (aux - 1));
    return Math.round(cuota);
  },

  subirHTML: function (nombre, prestamo, meses, interes, cuota) {
    return `<!DOCTYPE html>
    <html
      lang="en"
      class="bg-gradient-to-tr from-sky-400 to-[#23304c] w-full h-full"
    >
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Calculadora de Cuota Mensual</title>
        <script type="module" src="./scripts/main.js"></script>
        <link rel="stylesheet" href="./output.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div>
          <form
            method="post"
            id="main"
            action="/calculaIMC"
            enctype="application/x-www-form-urlencoded"
            class="flex flex-col"
          >
            <div class="flex flex-col text-center round p-3 font-[Poppins]">
              <div>
                <h1
                  class="text-4xl font-bold bg-gradient-to-r py-2 from-sky-400 to-slate-300 bg-clip-text text-transparent"
                >
                  Calculadora de Cuota Mensual
                </h1>
              </div>
              <div class="">
                <h1 class="text-white py-2 font-bold">Nombre</h1>
                <input
                  id="nombre"
                  class="rounded-lg shadow-inner shadow-slate-900 h-8 placeholder:italic placeholder:text-center place text-center"
                  placeholder="Sergio"
                  name="nombre"
                  autocomplete="off"
                />
              </div>
              <div>
                <h1 class="text-white py-2 font-bold">Préstamo</h1>
                <input
                  id="prestamo"
                  placeholder="$"
                  name="prestamo"
                  class="rounded-lg shadow-inner shadow-slate-900 h-8 placeholder:italic placeholder:text-center text-center"
                  autocomplete="off"
                />
              </div>
              <div>
                <h1 class="text-white py-2 font-bold">Meses</h1>
                <input
                  id="meses"
                  name="meses"
                  placeholder="5 meses"
                  class="rounded-lg shadow-inner shadow-slate-900 h-8 placeholder:italic placeholder:text-center text-center"
                  autocomplete="off"
                />
              </div>
              <div>
                <h1 class="text-white py-2 font-bold">Interés</h1>
                <input
                  id="interes"
                  placeholder="5%"
                  name="interes"
                  class="rounded-lg shadow-inner shadow-slate-900 h-8 placeholder:italic placeholder:text-center text-center"
                  autocomplete="off"
                />
              </div>
    
              <div class="py-5">
                <div class="pb-2">
                  <button
                    class="rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white h-10 w-40 hover:scale-110 hover:duration-300 font-semibold"
                    id="enviar"
                    type="submit"
                  >
                    Enviar!
                  </button>
                </div>
                <textarea
                  id="resultado"
                  readonly
                  class="rounded-lg shadow-inner shadow-slate-900 w-[500px] mt-3 h-[200px]"
                >
                El cliente: ${nombre} 
                pidió un préstamo de: $${prestamo} pesos
                con un interés del ${interes}% durante ${meses} meses. 
                Su cuota: $${cuota} pesos
                </textarea>
              </div>
            </div>
          </form>
        </div>
      </body>
    </html>
    
    `;
  },
};
