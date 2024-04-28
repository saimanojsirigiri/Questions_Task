const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", (msg) => {
  // Sending message to server
  // ws.send("Hello Server!");
});

// ws.on("close", () => {
//     console.log("Bye Server");
// });

ws.on("message", function (msg) {
  // Getting message from server
  if (msg === Object) {
    let data = JSON.parse(msg.data);
    console.log(data.que);
  }
  console.log("Received msg from the server: ", msg.toString());
});
