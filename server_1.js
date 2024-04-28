const WebSocket = require("ws");
const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (socket) => {
    // Logging when server connected
    console.log("Server Connected");

    // Sending message to clients
    socket.send("Hello, user! This message from the admin");

    // Receiving messages from clients
    socket.on("message", (msg) => {
        wss.clients.forEach(function(client) {
            // Sending message to clients
            client.send(msg);
        });
    });

    socket.on("close", () => {
        // Logging when client disconnected
        console.log("Client disconnected");
    });
});