const app = require('express')()
const server = require('http').createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Browser.html')
})

io.on('connection', (socket) => {
  console.log('Client connected')
  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
  socket.on('chat message', (data) => {
    console.log('Received message:', data)
    io.emit('chat message', data)
  })
})

server.listen(8080, () => {
  console.log('Server is running on port 8080')
})  