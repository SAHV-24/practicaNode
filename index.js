const express = require("express")
var app = express()
const port=8097

app.use(express.urlencoded({extended: true}))

app.get("/calculaIMC",(req,res)=>{
    res.sendFile(__dirname+"/static/index.html")
})

app.post("/calculaIMC",(req,res)=>{
    //Escribe tu línea de código para Post!
    console.log("hola")
    const transaccion = req.body
    console.log(transaccion)
})

app.get('/calculaIMC/style.css', (req, res) => {
      // retorna archivo fijo
    res.sendFile(__dirname+"/static/style.css");
  }) 

app.use(express.static('public'))

app.listen(port,()=>{
    console.log("El programa se está ejecutando por: http://localhost:8097/calculaIMC");
})
