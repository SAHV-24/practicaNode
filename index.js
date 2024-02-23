//Declaro funciones:
const funciones = require("./scripts/auxfunctions")

const express = require("express")
var app = express()
const port=8097

app.use(express.urlencoded({extended: true}))

//css:
app.use(express.static('public'))

app.get('/calculaIMC/style.css', (req, res) => {
    res.sendFile(__dirname+"/static/style.css");
  }) 

app.get("/calculaIMC",(req,res)=>{
    res.sendFile(__dirname+"/static/index.html")
})

app.post("/calculaIMC",(req,res)=>{
    const transaccion = req.body

  console.log(req.body+"\n")
    
    const nombre = transaccion.nombre;
    const prestamo = parseFloat(transaccion.prestamo);
    const interes = parseFloat(transaccion.interes);
    const meses = parseInt(transaccion.meses);

    let cuota = funciones.calcularCuotaMensual(prestamo,interes,meses)
    console.log(cuota)


})


app.listen(port,()=>{
    console.log("El programa se está ejecutando por: http://localhost:8097/calculaIMC");
})
