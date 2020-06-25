const net = require("net");

const args = process.argv.slice(2);

let host = args[0];
let port = parseInt(args[1]);
let message = args[2];

const client = net.createConnection({ host: host, port: port }, function(){});

client.on("connect", function(){
    client.write(message);
});

client.on("data", function(data){
    console.log(data.toString());
    client.destroy();
});
