const net = require('net');
const readline =require('readline-sync');
const servidor = {
    port: 3000,
    host: '192.168.1.77'
} 

const client = net.createConnection(servidor);

client.on('connect', ()=>{
    console.log('Se ha logrado conectar exitosamente')
    sendLine()
})
client.on('data', (data)=>{
    console.log('El servidor dice: '+ data)
    if (data != 'camara')
    {
    sendLine()
    }
})
client.on('error', (err)=>{
    console.log(err.message)
})
function sendLine(){
    var line = readline.question('\n ingresa un mensaje \n')
    if(line == 0){
        client.end()
    }else{
        client.write(line)
    }
}