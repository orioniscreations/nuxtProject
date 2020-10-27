const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')({
  server,
  path: "/sock"
});

io.on('connection', socket => {
  console.log('a Mun has connected')
  socket.on("chat msg", msg => {

    io.emit('message', msg)
  })
})


module.exports = {
  app,
  server
}
