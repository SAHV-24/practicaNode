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
    
    const nombre = transaccion.nombre;
    const prestamo = parseFloat(transaccion.prestamo);
    const interes = parseFloat(transaccion.interes);
    const meses = parseInt(transaccion.meses);

    if (transaccion.nombre!=NaN && transaccion.prestamo != NaN && transaccion.interes!=NaN && transaccion.meses!= NaN){

    let cuota = funciones.calcularCuotaMensual(prestamo,interes,meses)
    res.send(funciones.subirHTML(nombre,prestamo,interes,meses,cuota))}

})


app.listen(port,()=>{
    console.log("El programa se está ejecutando por: http://localhost:8097/calculaIMC");
})
