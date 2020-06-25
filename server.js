const net = require("net");

const port = 5000;

const server = net.createServer(function(socket){
    socket.setEncoding("utf8");

    socket.on("data", function(data){
        console.log(data);
        socket.write(data);
    });
});


server.listen({ host: "localhost", port: port }, function(){
    console.log('port:' + port);
});