const net = require ('net');
const server = net.createServer();

//encender el servidor
server.on('connection', (socket) => {

    //Primer mensaje
    socket.on('data', (data) => {
        console.log('Mensaje recibido desde el cliente: ' + data)
        if (data == 'hola'){
            socket.write('Hola Buenas tardes\n')
        }

        //Segundo mensaje
        console.log('Mensaje recibido desde el cliente: ' + data)
        if (data == 'cual es la fecha de hoy'){
            let dia = new Date();
            let output = String(dia.getDate()).padStart(2, '0') + '/' + String(dia.getMonth()).padStart(2, '0') + '/' + dia.getFullYear();
            socket.write('Hoy es ' + output);
        }
        //Tercer Mensaje
        console.log('Mensaje recibido desde el cliente: ' + data)
        if (data == 'que hora es'){
            let dia = new Date();
            let output = String(dia.getHours()).padStart(2, '0') + ':' + String(dia.getMinutes()).padStart(2, '0') + ':' + dia.getSeconds();
            socket.write('La hora es ' + output);
        }
        //Cuarto Mensaje
        console.log('Mensaje recibido desde el cliente: ' + data)
        if (data == 'a que hora sales hoy'){
            socket.write('A las 4 de la tarde\n')
        }
          //Quinto Mensaje
          console.log('Mensaje recibido desde el cliente: ' + data)
          if (data == 'adios'){
            socket.write('Nos vemos\n')
        }
    })
    //se cierra la comunicacion 
    socket.on('close', () => {
        console.log('Comunicacion Finalizada')
    })
    socket.on('error', (err)=>{
        console.log(err.message)
    })
})
// el servidor escucha ç
server.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto: ', server.address().port)
})