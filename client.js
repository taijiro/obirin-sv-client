
const net = require("net");

const args = process.argv.slice(2);

let host = args[0];
let port = parseInt(args[1]);
let message = args[2];

const logger = fun => console.log(`[${new Date()}] ${fun.call(null)}`);
const client = net.createConnection({ host: host, port: port }, () => {
});

client.on("connect", () => {
    client.write(message);
});

client.on("data", data => {
    console.log(data.toString());
    //logger(() => `receive message[${data}]`);
    client.destroy();
});
