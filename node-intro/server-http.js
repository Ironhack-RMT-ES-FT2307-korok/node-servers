const http = require('http');

const server = http.createServer((request, response) => {
  console.log("algun cliente me pide informacion")
  // aqui se ejecuta cuando un cliente nos hace una llamada

  
  // vamos a tener informacion de la solicitud
  console.log(request.url)

  // poder enviar una respuesta
  response.write("Hola desde el servidor!")
  response.end()

})

// constantemente esten escuchando llamadas de un cliente
server.listen( 3000 )
// existen puertos libres como el 3000
// - 3000 y 3005
// - 5000 a 5005
// - 8000 a 8005