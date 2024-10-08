import express from 'express'
import { WebSocketServer,WebSocket } from 'ws'

const app = express()

app.get("/", (req,res) => {
    res.send("Hello World")
})
let httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {

  ws.on('message', function message(data, isBinary) {
    console.log('received: %s', data)
  });
});