const express = require('express')
const app = express()
const port = 3000

// configuraciones del servidor (app.set)
app.use( express.static("public") ) // identificamos que en la carpeta public estaran todos los elementos estaticos (imagenes, videos, css, audios)

// un middleware => un ejecucion que ocurren siempre antes de acceder a las rutas
app.use((req, res, next) => {
  // se va a invocar en cualquier llamada
  console.log("esto siempre se ejecuta")

  // checkear validaciones de usuario => auth
  // checkeos de usuario => legales
  // chekeos de error
  // tracking
  // ip baneados
  // if (user.role === 12345) {
  //   return 
  // }

  // quiero continuar con la ejecucion normal del servidor
  next() // ahora que ejecutaste algo, continua con las rutas del servidor
}) // ejecuta algo en el servidor en cualquier llamada

// RUTA
app.get('/', (req, res) => {
  // console.log(req)
  // req es toda la info de la solicitud del cliente
  // res es toda la respuesta que le enviaré al cliente

  res.send('Hola desde el servidor!')
})

app.get("/patata", (req, res) => {
  res.send("Aqui tienes una patata")
})
 
app.get("/friends/all", (req, res) => {
  res.send("Estos son todos mis amigos")
})

app.get("/friends/:name", (req, res) => {
  // parametro dinamico => cajita donde se almacenará ese valor
  // crear una caja llamada "name" donde se almacena el valor que escriba el cliente en el URL
  console.log(req.params) // => aqui estan todos los parametros dinamicos
  if (req.params.name === "pedro") {
    res.send("Esta es la info y una imagen de Pedro")
  } else if (req.params.name === "antonio") {
    res.send("Esta es la info y una imagen de Antonio")
  } else if (req.params.name === "ruth") {
    res.send("Esta es la info y una imagen de Ruth")
  } else {
    res.send("Lo siento, no tendo más amigos :(")
  }
})


app.get("/home", (req, res, next) => {
  // ruta que enviará al usuario una pagina

  // sendFile para enviar archivos
  console.log( __dirname ) // la direccion absoluta de esta ubicación
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// control c para detener ejecucion en el terminal